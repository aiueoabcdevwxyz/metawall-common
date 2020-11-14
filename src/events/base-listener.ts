// import { Message, Stan } from 'node-nats-streaming';
import { Subjects } from './subjects';
import NATS from 'nats'

interface Event {
  subject: Subjects;
  data: any;
}

export abstract class Listener<T extends Event> {
  abstract subject: T['subject'];
  abstract queueGroupName: string;
  abstract onMessage(data: T['data'], msg: any): void;
  protected client: NATS.Client;
  protected ackWait = 5 * 1000;

  constructor(client: NATS.Client) {
    this.client = client;
  }

  // subscriptionOptions() {
  //   return this.client
  //     .subscriptionOptions()
  //     .setDeliverAllAvailable()
  //     .setManualAckMode(true)
  //     .setAckWait(this.ackWait)
  //     .setDurableName(this.queueGroupName);
  // }

  listen() {
    // const subscription = this.client.subscribe(
    //   this.subject,
    //   this.queueGroupName,
    //   this.subscriptionOptions()
    // );

    this.client.subscribe(this.subject, (msg: any, reply: any) => {
      console.log(`Message received: ${this.subject} / ${this.queueGroupName}`);

      // msg is a parsed JSON object object
      if(msg) {
        const parsedData = this.parseMessage(msg);
        this.onMessage(parsedData, msg);
      }
    })
  }

  parseMessage(msg: any) {
    const data = msg.getData();
    return typeof data === 'string'
      ? JSON.parse(data)
      : JSON.parse(data.toString('utf8'));
  }
}

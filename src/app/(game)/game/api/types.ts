// import { Writer as _Writer, Reader as _Reader } from "bin-serde";
// import {
//   NO_DIFF as _NO_DIFF,
//   DeepPartial as _DeepPartial,
//   Response as _Response,
//   Message as _Message,
//   ResponseMessage as _ResponseMessage,
//   EventMessage as _EventMessage,
// } from "./base";

export enum HathoraEventTypes {
  default,
}
export type HathoraEventPayloads = {
  [HathoraEventTypes.default]: string;
};

export type HathoraEvents = 
  | { type: HathoraEventTypes.default; val: HathoraEventPayloads[HathoraEventTypes.default] }
;
export enum Color {
  Yellow,
  Red,
  Purple,
  Green,
}
export enum State {
  Empty,
  WaitingForPlayers,
  Countdown,
  Playing,
  Finished,
}
export type Vector2 = {
  x: number;
  y: number;
};
export type Input = {
  space: boolean;
};
export type Player = {
  id: UserId;
  ready: boolean;
  location: Vector2;
  velocity: Vector2;
  enabled: boolean;
  lastTimeStamp: number;
  color: Color;
};
export type GameState = {
  state: State;
  time: number;
  startTime: number;
  players: Player[];
  winner: UserId;
};
export type UserId = string;
export type IJoinGameRequest = {
};
export type ILeaveGameRequest = {
};
export type IReadyRequest = {
};
export type IPingRequest = {
  time: number;
};
export type IFlapRequest = {
};
export type IInitializeRequest = {}

// export const Vector2 = {
//   default(): Vector2 {
//     return {
//       x: 0.0,
//       y: 0.0,
//     };
//   },
//   validate(obj: Vector2) {
//     if (typeof obj !== "object") {
//       return [`Invalid Vector2 object: ${obj}`]
//     }
//     let validationErrors: string[];

//     validationErrors = validatePrimitive(typeof obj.x === "number", `Invalid float: ${ obj.x }`);
//     if (validationErrors.length > 0) {
//       return validationErrors.concat("Invalid key: Vector2.x");
//     }
//     validationErrors = validatePrimitive(typeof obj.y === "number", `Invalid float: ${ obj.y }`);
//     if (validationErrors.length > 0) {
//       return validationErrors.concat("Invalid key: Vector2.y");
//     }

//     return validationErrors;
//   },
//   encode(obj: Vector2, writer?: _Writer) {
//     const buf = writer ?? new _Writer();
//     writeFloat(buf, obj.x);
//     writeFloat(buf, obj.y);
//     return buf;
//   },
//   encodeDiff(obj: _DeepPartial<Vector2>, writer?: _Writer) {
//     const buf = writer ?? new _Writer();
//     const tracker: boolean[] = [];
//     tracker.push(obj.x !== _NO_DIFF);
//     tracker.push(obj.y !== _NO_DIFF);
//     buf.writeBits(tracker);
//     if (obj.x !== _NO_DIFF) {
//       writeFloat(buf, obj.x);
//     }
//     if (obj.y !== _NO_DIFF) {
//       writeFloat(buf, obj.y);
//     }
//     return buf;
//   },
//   decode(buf: ArrayBufferView | _Reader): Vector2 {
//     const sb = ArrayBuffer.isView(buf) ? new _Reader(buf) : buf;
//     return {
//       x: parseFloat(sb),
//       y: parseFloat(sb),
//     };
//   },
//   decodeDiff(buf: ArrayBufferView | _Reader): _DeepPartial<Vector2> {
//     const sb = ArrayBuffer.isView(buf) ? new _Reader(buf) : buf;
//     const tracker = sb.readBits(2);
//     return {
//       x: tracker.shift() ? parseFloat(sb) : _NO_DIFF,
//       y: tracker.shift() ? parseFloat(sb) : _NO_DIFF,
//     };
//   },
// };
// export const Input = {
//   default(): Input {
//     return {
//       space: false,
//     };
//   },
//   validate(obj: Input) {
//     if (typeof obj !== "object") {
//       return [`Invalid Input object: ${obj}`]
//     }
//     let validationErrors: string[];

//     validationErrors = validatePrimitive(typeof obj.space === "boolean", `Invalid boolean: ${ obj.space }`);
//     if (validationErrors.length > 0) {
//       return validationErrors.concat("Invalid key: Input.space");
//     }

//     return validationErrors;
//   },
//   encode(obj: Input, writer?: _Writer) {
//     const buf = writer ?? new _Writer();
//     writeBoolean(buf, obj.space);
//     return buf;
//   },
//   encodeDiff(obj: _DeepPartial<Input>, writer?: _Writer) {
//     const buf = writer ?? new _Writer();
//     const tracker: boolean[] = [];
//     tracker.push(obj.space !== _NO_DIFF);
//     buf.writeBits(tracker);
//     if (obj.space !== _NO_DIFF) {
//       writeBoolean(buf, obj.space);
//     }
//     return buf;
//   },
//   decode(buf: ArrayBufferView | _Reader): Input {
//     const sb = ArrayBuffer.isView(buf) ? new _Reader(buf) : buf;
//     return {
//       space: parseBoolean(sb),
//     };
//   },
//   decodeDiff(buf: ArrayBufferView | _Reader): _DeepPartial<Input> {
//     const sb = ArrayBuffer.isView(buf) ? new _Reader(buf) : buf;
//     const tracker = sb.readBits(1);
//     return {
//       space: tracker.shift() ? parseBoolean(sb) : _NO_DIFF,
//     };
//   },
// };
// export const Player = {
//   default(): Player {
//     return {
//       id: "",
//       ready: false,
//       location: Vector2.default(),
//       velocity: Vector2.default(),
//       enabled: false,
//       lastTimeStamp: 0,
//       color: 0,
//     };
//   },
//   validate(obj: Player) {
//     if (typeof obj !== "object") {
//       return [`Invalid Player object: ${obj}`]
//     }
//     let validationErrors: string[];

//     validationErrors = validatePrimitive(typeof obj.id === "string", `Invalid UserId: ${ obj.id }`);
//     if (validationErrors.length > 0) {
//       return validationErrors.concat("Invalid key: Player.id");
//     }
//     validationErrors = validatePrimitive(typeof obj.ready === "boolean", `Invalid boolean: ${ obj.ready }`);
//     if (validationErrors.length > 0) {
//       return validationErrors.concat("Invalid key: Player.ready");
//     }
//     validationErrors = Vector2.validate(obj.location);
//     if (validationErrors.length > 0) {
//       return validationErrors.concat("Invalid key: Player.location");
//     }
//     validationErrors = Vector2.validate(obj.velocity);
//     if (validationErrors.length > 0) {
//       return validationErrors.concat("Invalid key: Player.velocity");
//     }
//     validationErrors = validatePrimitive(typeof obj.enabled === "boolean", `Invalid boolean: ${ obj.enabled }`);
//     if (validationErrors.length > 0) {
//       return validationErrors.concat("Invalid key: Player.enabled");
//     }
//     validationErrors = validatePrimitive(Number.isInteger(obj.lastTimeStamp), `Invalid int: ${ obj.lastTimeStamp }`);
//     if (validationErrors.length > 0) {
//       return validationErrors.concat("Invalid key: Player.lastTimeStamp");
//     }
//     validationErrors = validatePrimitive(obj.color in Color, `Invalid Color: ${ obj.color }`);
//     if (validationErrors.length > 0) {
//       return validationErrors.concat("Invalid key: Player.color");
//     }

//     return validationErrors;
//   },
//   encode(obj: Player, writer?: _Writer) {
//     const buf = writer ?? new _Writer();
//     writeString(buf, obj.id);
//     writeBoolean(buf, obj.ready);
//     Vector2.encode(obj.location, buf);
//     Vector2.encode(obj.velocity, buf);
//     writeBoolean(buf, obj.enabled);
//     writeInt(buf, obj.lastTimeStamp);
//     writeUInt8(buf, obj.color);
//     return buf;
//   },
//   encodeDiff(obj: _DeepPartial<Player>, writer?: _Writer) {
//     const buf = writer ?? new _Writer();
//     const tracker: boolean[] = [];
//     tracker.push(obj.id !== _NO_DIFF);
//     tracker.push(obj.ready !== _NO_DIFF);
//     tracker.push(obj.location !== _NO_DIFF);
//     tracker.push(obj.velocity !== _NO_DIFF);
//     tracker.push(obj.enabled !== _NO_DIFF);
//     tracker.push(obj.lastTimeStamp !== _NO_DIFF);
//     tracker.push(obj.color !== _NO_DIFF);
//     buf.writeBits(tracker);
//     if (obj.id !== _NO_DIFF) {
//       writeString(buf, obj.id);
//     }
//     if (obj.ready !== _NO_DIFF) {
//       writeBoolean(buf, obj.ready);
//     }
//     if (obj.location !== _NO_DIFF) {
//       Vector2.encodeDiff(obj.location, buf);
//     }
//     if (obj.velocity !== _NO_DIFF) {
//       Vector2.encodeDiff(obj.velocity, buf);
//     }
//     if (obj.enabled !== _NO_DIFF) {
//       writeBoolean(buf, obj.enabled);
//     }
//     if (obj.lastTimeStamp !== _NO_DIFF) {
//       writeInt(buf, obj.lastTimeStamp);
//     }
//     if (obj.color !== _NO_DIFF) {
//       writeUInt8(buf, obj.color);
//     }
//     return buf;
//   },
//   decode(buf: ArrayBufferView | _Reader): Player {
//     const sb = ArrayBuffer.isView(buf) ? new _Reader(buf) : buf;
//     return {
//       id: parseString(sb),
//       ready: parseBoolean(sb),
//       location: Vector2.decode(sb),
//       velocity: Vector2.decode(sb),
//       enabled: parseBoolean(sb),
//       lastTimeStamp: parseInt(sb),
//       color: parseUInt8(sb),
//     };
//   },
//   decodeDiff(buf: ArrayBufferView | _Reader): _DeepPartial<Player> {
//     const sb = ArrayBuffer.isView(buf) ? new _Reader(buf) : buf;
//     const tracker = sb.readBits(7);
//     return {
//       id: tracker.shift() ? parseString(sb) : _NO_DIFF,
//       ready: tracker.shift() ? parseBoolean(sb) : _NO_DIFF,
//       location: tracker.shift() ? Vector2.decodeDiff(sb) : _NO_DIFF,
//       velocity: tracker.shift() ? Vector2.decodeDiff(sb) : _NO_DIFF,
//       enabled: tracker.shift() ? parseBoolean(sb) : _NO_DIFF,
//       lastTimeStamp: tracker.shift() ? parseInt(sb) : _NO_DIFF,
//       color: tracker.shift() ? parseUInt8(sb) : _NO_DIFF,
//     };
//   },
// };
// export const GameState = {
//   default(): GameState {
//     return {
//       state: 0,
//       time: 0.0,
//       startTime: 0.0,
//       players: [],
//       winner: "",
//     };
//   },
//   validate(obj: GameState) {
//     if (typeof obj !== "object") {
//       return [`Invalid GameState object: ${obj}`]
//     }
//     let validationErrors: string[];

//     validationErrors = validatePrimitive(obj.state in State, `Invalid State: ${ obj.state }`);
//     if (validationErrors.length > 0) {
//       return validationErrors.concat("Invalid key: GameState.state");
//     }
//     validationErrors = validatePrimitive(typeof obj.time === "number", `Invalid float: ${ obj.time }`);
//     if (validationErrors.length > 0) {
//       return validationErrors.concat("Invalid key: GameState.time");
//     }
//     validationErrors = validatePrimitive(typeof obj.startTime === "number", `Invalid float: ${ obj.startTime }`);
//     if (validationErrors.length > 0) {
//       return validationErrors.concat("Invalid key: GameState.startTime");
//     }
//     validationErrors = validateArray(obj.players, (x) => Player.validate(x));
//     if (validationErrors.length > 0) {
//       return validationErrors.concat("Invalid key: GameState.players");
//     }
//     validationErrors = validatePrimitive(typeof obj.winner === "string", `Invalid UserId: ${ obj.winner }`);
//     if (validationErrors.length > 0) {
//       return validationErrors.concat("Invalid key: GameState.winner");
//     }

//     return validationErrors;
//   },
//   encode(obj: GameState, writer?: _Writer) {
//     const buf = writer ?? new _Writer();
//     writeUInt8(buf, obj.state);
//     writeFloat(buf, obj.time);
//     writeFloat(buf, obj.startTime);
//     writeArray(buf, obj.players, (x) => Player.encode(x, buf));
//     writeString(buf, obj.winner);
//     return buf;
//   },
//   encodeDiff(obj: _DeepPartial<GameState>, writer?: _Writer) {
//     const buf = writer ?? new _Writer();
//     const tracker: boolean[] = [];
//     tracker.push(obj.state !== _NO_DIFF);
//     tracker.push(obj.time !== _NO_DIFF);
//     tracker.push(obj.startTime !== _NO_DIFF);
//     tracker.push(obj.players !== _NO_DIFF);
//     tracker.push(obj.winner !== _NO_DIFF);
//     buf.writeBits(tracker);
//     if (obj.state !== _NO_DIFF) {
//       writeUInt8(buf, obj.state);
//     }
//     if (obj.time !== _NO_DIFF) {
//       writeFloat(buf, obj.time);
//     }
//     if (obj.startTime !== _NO_DIFF) {
//       writeFloat(buf, obj.startTime);
//     }
//     if (obj.players !== _NO_DIFF) {
//       writeArrayDiff(buf, obj.players, (x) => Player.encodeDiff(x, buf));
//     }
//     if (obj.winner !== _NO_DIFF) {
//       writeString(buf, obj.winner);
//     }
//     return buf;
//   },
//   decode(buf: ArrayBufferView | _Reader): GameState {
//     const sb = ArrayBuffer.isView(buf) ? new _Reader(buf) : buf;
//     return {
//       state: parseUInt8(sb),
//       time: parseFloat(sb),
//       startTime: parseFloat(sb),
//       players: parseArray(sb, () => Player.decode(sb)),
//       winner: parseString(sb),
//     };
//   },
//   decodeDiff(buf: ArrayBufferView | _Reader): _DeepPartial<GameState> {
//     const sb = ArrayBuffer.isView(buf) ? new _Reader(buf) : buf;
//     const tracker = sb.readBits(5);
//     return {
//       state: tracker.shift() ? parseUInt8(sb) : _NO_DIFF,
//       time: tracker.shift() ? parseFloat(sb) : _NO_DIFF,
//       startTime: tracker.shift() ? parseFloat(sb) : _NO_DIFF,
//       players: tracker.shift() ? parseArrayDiff(sb, () => Player.decodeDiff(sb)) : _NO_DIFF,
//       winner: tracker.shift() ? parseString(sb) : _NO_DIFF,
//     };
//   },
// };
// export const IJoinGameRequest = {
//   default(): IJoinGameRequest {
//     return {
//     };
//   },
//   encode(obj: IJoinGameRequest, writer?: _Writer) {
//     const buf = writer ?? new _Writer();
//     return buf;
//   },
//   decode(buf: ArrayBufferView | _Reader): IJoinGameRequest {
//     const sb = ArrayBuffer.isView(buf) ? new _Reader(buf) : buf;
//     return {
//     };
//   },
// };
// export const ILeaveGameRequest = {
//   default(): ILeaveGameRequest {
//     return {
//     };
//   },
//   encode(obj: ILeaveGameRequest, writer?: _Writer) {
//     const buf = writer ?? new _Writer();
//     return buf;
//   },
//   decode(buf: ArrayBufferView | _Reader): ILeaveGameRequest {
//     const sb = ArrayBuffer.isView(buf) ? new _Reader(buf) : buf;
//     return {
//     };
//   },
// };
// export const IReadyRequest = {
//   default(): IReadyRequest {
//     return {
//     };
//   },
//   encode(obj: IReadyRequest, writer?: _Writer) {
//     const buf = writer ?? new _Writer();
//     return buf;
//   },
//   decode(buf: ArrayBufferView | _Reader): IReadyRequest {
//     const sb = ArrayBuffer.isView(buf) ? new _Reader(buf) : buf;
//     return {
//     };
//   },
// };
// export const IPingRequest = {
//   default(): IPingRequest {
//     return {
//       time: 0,
//     };
//   },
//   encode(obj: IPingRequest, writer?: _Writer) {
//     const buf = writer ?? new _Writer();
//     writeInt(buf, obj.time);
//     return buf;
//   },
//   decode(buf: ArrayBufferView | _Reader): IPingRequest {
//     const sb = ArrayBuffer.isView(buf) ? new _Reader(buf) : buf;
//     return {
//       time: parseInt(sb),
//     };
//   },
// };
// export const IFlapRequest = {
//   default(): IFlapRequest {
//     return {
//     };
//   },
//   encode(obj: IFlapRequest, writer?: _Writer) {
//     const buf = writer ?? new _Writer();
//     return buf;
//   },
//   decode(buf: ArrayBufferView | _Reader): IFlapRequest {
//     const sb = ArrayBuffer.isView(buf) ? new _Reader(buf) : buf;
//     return {
//     };
//   },
// };
// export const IInitializeRequest = {
//   default(): IInitializeRequest {
//     return {};
//   },
//   encode(x: IInitializeRequest, buf?: _Writer) {
//     return buf ?? new _Writer();
//   },
//   decode(sb: ArrayBufferView | _Reader): IInitializeRequest {
//     return {};
//   },
// };

// export function encodeStateSnapshot(x: GameState) {
//   const buf = new _Writer();
//   buf.writeUInt8(0);
//   GameState.encode(x, buf);
//   return buf.toBuffer();
// }
// function encodeEvent(buf: _Writer, event: _EventMessage) {
//   buf.writeUVarint(event.event);
//   switch (event.event) {
//     case HathoraEventTypes.default: {
//       const x = event.data as HathoraEventPayloads[HathoraEventTypes.default];
//       writeString(buf, x);
//       break;
//     }
//   }
// }
// function decodeEvent(sb: _Reader): HathoraEvents {
//   const event = sb.readUVarint();
//   switch (event) {
//     case HathoraEventTypes.default: {
//       const x = parseString(sb);
//       return { type: HathoraEventTypes.default, val: x };
//     }
//     default:
//       throw new Error("Unknown event type");
//   }
// }
// export function encodeStateUpdate(
//   x: _DeepPartial<GameState> | undefined,
//   changedAtDiff: number,
//   messages: _Message[]
// ) {
//   const buf = new _Writer();
//   buf.writeUInt8(1);
//   buf.writeUVarint(changedAtDiff);
//   const responses = messages.flatMap((msg) => (msg.type === "response" ? msg : []));
//   buf.writeUVarint(responses.length);
//   responses.forEach(({ msgId, response }) => {
//     buf.writeUInt32(Number(msgId));
//     writeOptional(buf, response.type === "error" ? response.error : undefined, (x) => writeString(buf, x));
//   });
//   const events = messages.flatMap((msg) => (msg.type === "event" ? msg : []));
//   buf.writeUVarint(events.length);
//   events.forEach((message) => encodeEvent(buf, message));
//   if (x !== undefined) {
//     GameState.encodeDiff(x, buf);
//   }
//   return buf.toBuffer();
// }
// export function encodeStateError() {
//   const buf = new _Writer();
//   buf.writeUInt8(2);
//   return buf.toBuffer();
// }
// export function decodeStateUpdate(buf: ArrayBufferView | _Reader): {
//   stateDiff?: _DeepPartial<GameState>;
//   changedAtDiff: number;
//   responses: _ResponseMessage[];
//   events: HathoraEvents[];
// } {
//   const sb = ArrayBuffer.isView(buf) ? new _Reader(buf) : buf;
//   const changedAtDiff = sb.readUVarint();
//   const responses = [...Array(sb.readUVarint())].map(() => {
//     const msgId = sb.readUInt32();
//     const maybeError = parseOptional(sb, () => parseString(sb));
//     return _Message.response(msgId, maybeError === undefined ? _Response.ok() : _Response.error(maybeError));
//   });
//   const events = [...Array(sb.readUVarint())].map(() => decodeEvent(sb));
//   const stateDiff = sb.remaining() ? GameState.decodeDiff(sb) : undefined;
//   return { stateDiff, changedAtDiff, responses, events };
// }
// export function decodeStateSnapshot(buf: ArrayBufferView | _Reader) {
//   const sb = ArrayBuffer.isView(buf) ? new _Reader(buf) : buf;
//   return GameState.decode(sb);
// }

// function validatePrimitive(isValid: boolean, errorMessage: string) {
//   return isValid ? [] : [errorMessage];
// }
// function validateOptional<T>(val: T | undefined, innerValidate: (x: T) => string[]) {
//   if (val !== undefined) {
//     return innerValidate(val);
//   }
//   return [];
// }
// function validateArray<T>(arr: T[], innerValidate: (x: T) => string[]) {
//   if (!Array.isArray(arr)) {
//     return ["Invalid array: " + arr];
//   }
//   for (let i = 0; i < arr.length; i++) {
//     const validationErrors = innerValidate(arr[i]);
//     if (validationErrors.length > 0) {
//       return validationErrors.concat("Invalid array item at index " + i);
//     }
//   }
//   return [];
// }

// function writeUInt8(buf: _Writer, x: number) {
//   buf.writeUInt8(x);
// }
// function writeBoolean(buf: _Writer, x: boolean) {
//   buf.writeUInt8(x ? 1 : 0);
// }
// function writeInt(buf: _Writer, x: number) {
//   buf.writeVarint(x);
// }
// function writeFloat(buf: _Writer, x: number) {
//   buf.writeFloat(x);
// }
// function writeString(buf: _Writer, x: string) {
//   buf.writeString(x);
// }
// function writeOptional<T>(buf: _Writer, x: T | undefined, innerWrite: (x: T) => void) {
//   writeBoolean(buf, x !== undefined);
//   if (x !== undefined) {
//     innerWrite(x);
//   }
// }
// function writeArray<T>(buf: _Writer, x: T[], innerWrite: (x: T) => void) {
//   buf.writeUVarint(x.length);
//   for (const val of x) {
//     innerWrite(val);
//   }
// }
// function writeArrayDiff<T>(buf: _Writer, x: (T | typeof _NO_DIFF)[], innerWrite: (x: T) => void) {
//   buf.writeUVarint(x.length);
//   const tracker: boolean[] = [];
//   x.forEach((val) => {
//     tracker.push(val !== _NO_DIFF);
//   });
//   buf.writeBits(tracker);
//   x.forEach((val) => {
//     if (val !== _NO_DIFF) {
//       innerWrite(val);
//     }
//   });
// }

// function parseUInt8(buf: _Reader): number {
//   return buf.readUInt8();
// }
// function parseBoolean(buf: _Reader): boolean {
//   return buf.readUInt8() > 0;
// }
// function parseInt(buf: _Reader): number {
//   return buf.readVarint();
// }
// function parseFloat(buf: _Reader): number {
//   return buf.readFloat();
// }
// function parseString(buf: _Reader): string {
//   return buf.readString();
// }
// function parseOptional<T>(buf: _Reader, innerParse: (buf: _Reader) => T): T | undefined {
//   return parseBoolean(buf) ? innerParse(buf) : undefined;
// }
// function parseArray<T>(buf: _Reader, innerParse: () => T): T[] {
//   const len = buf.readUVarint();
//   const arr = [];
//   for (let i = 0; i < len; i++) {
//     arr.push(innerParse());
//   }
//   return arr;
// }
// function parseArrayDiff<T>(buf: _Reader, innerParse: () => T): (T | typeof _NO_DIFF)[] {
//   const len = buf.readUVarint();
//   const tracker = buf.readBits(len);
//   const arr = [];
//   for (let i = 0; i < len; i++) {
//     if (tracker.shift()) {
//       arr.push(innerParse());
//     } else {
//       arr.push(_NO_DIFF);
//     }
//   }
//   return arr;
// }

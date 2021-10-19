export interface Block {
  id: string,
  type: string,
  attributes: {
    data: string,
    hash: string,
    index: number,
    'previous-hash': string,
    timestamp: number
  }
}

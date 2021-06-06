export interface AuditableObject {
  createdAt: Date
  modifiedAt: Date
}

export interface ICoreMessage extends AuditableObject {
  id: string
  title?: string
  body: string
}

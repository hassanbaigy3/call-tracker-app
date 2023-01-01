export type UserType = {
  id: String;
  username: String;
};

export type Note = {
  id: String;
  content: String;
};

export type CallType = {
  id: String;
  direction: String;
  from: String;
  to: String;
  duration: Number;
  is_archived: Boolean;
  call_type: String;
  via: String;
  created_at: String;
  notes: Note[];
};

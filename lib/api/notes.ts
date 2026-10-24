import { api } from "./client";
import type {
  CreateNoteParams,
  FetchNotesParams,
  FetchNotesResponse,
  Note,
} from "@/types/note";

export async function fetchNotes({
  page,
  perPage,
  search = "",
  tag,
}: FetchNotesParams): Promise<FetchNotesResponse> {
  const response = await api.get<FetchNotesResponse>("/notes", {
    params: { page, perPage, search, ...(tag ? { tag } : {}) },
  });
  return response.data;
}

export async function createNote(newNote: CreateNoteParams): Promise<Note> {
  const response = await api.post<Note>("/notes", newNote);
  return response.data;
}

export async function deleteNote(id: string): Promise<Note> {
  const response = await api.delete<Note>(`/notes/${id}`);
  return response.data;
}

export async function fetchNoteById(id: string): Promise<Note> {
  const response = await api.get<Note>(`/notes/${id}`);
  return response.data;
}

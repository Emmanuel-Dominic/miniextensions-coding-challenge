
interface KlassFields {
    Students: string[];
    Name: string;
}

interface StudentFields {
    Classes: string[];
    Name: string;
}

export interface KlassRecord {
    id: string;
    fields: KlassFields;
    createdTime: string;
}

export interface StudentRecord {
    id: string;
    fields: StudentFields;
    createdTime: string;
}

export interface Klass {
    records: KlassRecord[];
}

export interface Student {
    records: StudentRecord[];
}

export interface Found {
  [key: string]: string | undefined;
}

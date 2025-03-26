export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      early_signups: {
        Row: {
          contact: string
          created_at: string
          id: number
          isProfessional: boolean
        }
        Insert: {
          contact: string
          created_at?: string
          id?: number
          isProfessional?: boolean
        }
        Update: {
          contact?: string
          created_at?: string
          id?: number
          isProfessional?: boolean
        }
        Relationships: []
      }
      professionals: {
        Row: {
          bio: string | null
          category: Database["public"]["Enums"]["Professional Categories"]
          created_at: string
          degree: string | null
          experience: Database["public"]["Enums"]["Experience level"]
          hourly_rate: number
          id: number
          is_verified: boolean
          languages: Database["public"]["Enums"]["Languages"][]
          professional_id: string
          profile_picture: string
          rating: number
          rating_count: number
          school: string | null
          specialities: string[]
          updated_at: string
        }
        Insert: {
          bio?: string | null
          category: Database["public"]["Enums"]["Professional Categories"]
          created_at?: string
          degree?: string | null
          experience?: Database["public"]["Enums"]["Experience level"]
          hourly_rate: number
          id?: number
          is_verified?: boolean
          languages: Database["public"]["Enums"]["Languages"][]
          professional_id?: string
          profile_picture: string
          rating?: number
          rating_count?: number
          school?: string | null
          specialities: string[]
          updated_at?: string
        }
        Update: {
          bio?: string | null
          category?: Database["public"]["Enums"]["Professional Categories"]
          created_at?: string
          degree?: string | null
          experience?: Database["public"]["Enums"]["Experience level"]
          hourly_rate?: number
          id?: number
          is_verified?: boolean
          languages?: Database["public"]["Enums"]["Languages"][]
          professional_id?: string
          profile_picture?: string
          rating?: number
          rating_count?: number
          school?: string | null
          specialities?: string[]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "Professionals_professional_id_fkey"
            columns: ["professional_id"]
            isOneToOne: true
            referencedRelation: "public_user_names"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "Professionals_professional_id_fkey"
            columns: ["professional_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          },
        ]
      }
      users: {
        Row: {
          created_at: string
          email: string
          first_name: string
          id: number
          last_name: string | null
          phone: string | null
          type: Database["public"]["Enums"]["User Type"]
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          email: string
          first_name: string
          id?: number
          last_name?: string | null
          phone?: string | null
          type?: Database["public"]["Enums"]["User Type"]
          updated_at?: string
          user_id?: string
        }
        Update: {
          created_at?: string
          email?: string
          first_name?: string
          id?: number
          last_name?: string | null
          phone?: string | null
          type?: Database["public"]["Enums"]["User Type"]
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      public_user_names: {
        Row: {
          first_name: string | null
          last_name: string | null
          user_id: string | null
        }
        Insert: {
          first_name?: string | null
          last_name?: string | null
          user_id?: string | null
        }
        Update: {
          first_name?: string | null
          last_name?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      "Experience level":
      | "< 1 Year"
      | "1-3 Years"
      | "3-7 Years"
      | "7-10 Years"
      | "10-15 Years"
      | "15-20 Years"
      | "20+ Years"
      Languages:
      | "ASSAMESE"
      | "BENGALI"
      | "BODO"
      | "DOGRI"
      | "GUJARATI"
      | "HINDI"
      | "KANNADA"
      | "KASHMIRI"
      | "KONKANI"
      | "MAITHILI"
      | "MALAYALAM"
      | "MANIPURI"
      | "MARATHI"
      | "NEPALI"
      | "ODIA"
      | "PUNJABI"
      | "SANSKRIT"
      | "SANTHALI"
      | "SINDHI"
      | "TAMIL"
      | "TELUGU"
      | "URDU"
      | "ENGLISH"
      "Professional Categories":
      | "LAWYER"
      | "CHARTED ACCOUNTANT"
      | "COMPANY SECRETARY"
      | "COST MANAGEMENT ACCOUNTANT"
      "User Type": "CUSTOMER" | "PROFESSIONAL"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
  | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
  | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
  ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
    Database[PublicTableNameOrOptions["schema"]]["Views"])
  : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
    Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
  ? R
  : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
    PublicSchema["Views"])
  ? (PublicSchema["Tables"] &
    PublicSchema["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
  ? R
  : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
  | keyof PublicSchema["Tables"]
  | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
  ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
  : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
    Insert: infer I
  }
  ? I
  : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
    Insert: infer I
  }
  ? I
  : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
  | keyof PublicSchema["Tables"]
  | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
  ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
  : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
    Update: infer U
  }
  ? U
  : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
    Update: infer U
  }
  ? U
  : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
  | keyof PublicSchema["Enums"]
  | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
  ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
  : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
  ? PublicSchema["Enums"][PublicEnumNameOrOptions]
  : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
  | keyof PublicSchema["CompositeTypes"]
  | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
  ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
  : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
  ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
  : never

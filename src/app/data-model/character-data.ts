export interface CharacterData {
    char_id?:                     number;
    name?:                        string;
    birthday?:                    string;
    occupation?:                  Occupation[];
    img?:                         string;
    status?:                      string;
    nickname?:                    string;
    appearance?:                  Appearance[];    
    portrayed?:                   string;
    category?:                    string;
    bcsAppearance?:               BetterCallSaulAppearance[];
}

export interface Occupation{
    name?: string;
}

export interface Appearance{
    season?: number;
}

export interface BetterCallSaulAppearance{
    season?: number;
}

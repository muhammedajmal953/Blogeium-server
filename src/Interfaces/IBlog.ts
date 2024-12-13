

export interface IBlog extends Document{
    heading: string,
    content: string,
    image: string,
    postedBy: any,
    createdAt: Date,
}
import {
    // eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
    Table,
    Model,
    // eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
    Column,
    // eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
    DataType,
    // eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
    ForeignKey,
    // eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
    BelongsTo,
    // eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
    HasMany
} from "sequelize-typescript";

// eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
import Comment from "./Comment";
// eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
import Post from "./Post";
// eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
import Reaction from "./Reaction";
// eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
import User from "./User";

@Table({
    tableName: "replies"
})
class Reply extends Model {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    override id!: number;

    @Column({
        type: DataType.TEXT
    })
    content!: string;

    @ForeignKey(() => {
        return User;
    })
    @Column({
        type: DataType.INTEGER
    })
    userId!: number;

    @ForeignKey(() => {
        return Post;
    })
    @Column({
        type: DataType.INTEGER
    })
    postId!: number;

    @ForeignKey(() => {
        return Comment;
    })
    @Column({
        type: DataType.INTEGER
    })
    commentId!: number;

    @BelongsTo(() => {
        return User;
    })
    user!: User;

    @BelongsTo(() => {
        return Post;
    })
    post!: Post;

    @BelongsTo(() => {
        return Comment;
    })
    comment!: Comment;

    @HasMany(
        () => {
            return Reaction;
        },
        {
            onDelete: "CASCADE"
        }
    )
    reactions!: Reaction;
}

export default Reply;

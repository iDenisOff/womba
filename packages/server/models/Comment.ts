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
import Post from "./Post";
// eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
import Reaction from "./Reaction";
import Reply from "./Reply";
// eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
import User from "./User";

@Table({
    tableName: "comments"
})
class Comment extends Model {
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

    @BelongsTo(() => {
        return User;
    })
    user!: User;

    @BelongsTo(() => {
        return Post;
    })
    post!: Post;

    @HasMany(() => {
        return Reply;
    })
    reply!: Reply;

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

export default Comment;

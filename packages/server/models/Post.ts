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
// eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
import Comment from "./Comment";
// eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
import Reaction from "./Reaction";
import Reply from "./Reply";
import User from "./User";

@Table({
    tableName: "posts"
})
class Post extends Model {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    override id!: number;

    @Column({
        type: DataType.STRING
    })
    title!: string;

    @Column({
        type: DataType.STRING
    })
    content!: string;

    @ForeignKey(() => {
        return User;
    })
    @Column({
        type: DataType.INTEGER
    })
    userId!: number;

    @BelongsTo(() => {
        return User;
    })
    user!: User;

    @HasMany(() => {
        return Comment;
    })
    comment!: Comment;

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

export default Post;

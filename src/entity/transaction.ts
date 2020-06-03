import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn } from 'typeorm';
import { User } from './user';
import { Wallet } from './wallet';

export type TransactionType = 'income' | 'expenses';

@Entity()
export class Transaction extends BaseEntity {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ type: 'real', nullable: true })
    public score: string;

    @Column()
    public category: number;

    @CreateDateColumn()
    date: Date;

    @Column({
        type: 'enum',
        enum: ['income', 'expenses'],
    })
    public type: TransactionType;

    @Column({ type: 'int', nullable: true })
    walletId: number;

    @Column({ type: 'int', nullable: true })
    userId: number;

    @ManyToOne(() => Wallet, (wallet) => wallet.transactions)
    wallet: Wallet;

    @ManyToOne(() => User, (user) => user.transactions)
    user: User;
}

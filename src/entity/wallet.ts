import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { User } from './user';
import { Transaction } from './transaction';

export type WalletStatus = 'active' | 'deactive' | 'delete';

@Entity()
export class Wallet extends BaseEntity {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public name: string;

    @Column({ type: 'real', nullable: true })
    public balance: string;

    @Column()
    public type: number;

    @Column({
        type: 'enum',
        enum: ['active', 'deactive', 'delete'],
        default: 'active',
    })
    public status: WalletStatus;

    @Column({ type: 'int', nullable: true })
    userId: number;

    @ManyToOne(() => User, (user) => user.wallets)
    user: User;

    @OneToMany(() => Transaction, (transaction) => transaction.wallet)
    transactions: Transaction[];
}

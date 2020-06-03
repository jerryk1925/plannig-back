import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Wallet } from './wallet';
import { Transaction } from './transaction';

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public username: string;

    @Column({ select: false })
    public password: string;

    @OneToMany(() => Wallet, (wallet) => wallet.user)
    wallets: Wallet[];

    @OneToMany(() => Transaction, (transaction) => transaction.user)
    transactions: Transaction[];
}

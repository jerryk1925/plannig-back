import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Wallet } from './wallet';

@Entity()
export class User extends BaseEntity {

	@PrimaryGeneratedColumn()
	public id: number;

	@Column()
	public username: string;

	@Column({ select: false })
	public password: string;
	
	@OneToMany(type => Wallet, wallet => wallet.user)
	wallets: Wallet[];
	
}

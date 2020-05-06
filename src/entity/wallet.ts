import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import {User} from './user';

@Entity()
export class Wallet extends BaseEntity {
	
	@PrimaryGeneratedColumn()
	public id: number;
	
	@Column()
	public username: string;
	
	@Column({ select: false })
	public password: string;
	
	@ManyToOne(type => User, user => user.wallets)
	user: User;
	
}

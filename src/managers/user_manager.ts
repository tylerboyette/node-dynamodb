import { DynamoDB } from 'aws-sdk';
import * as bcrypt from 'bcrypt';

import User from '../view_models/user';
import UserAdd from '../view_models/user_add';

export default class UserManager {

    /**
     * Attempts to get a User by id from DynamoDB.
     * @param email The email (which is the primary key) of the User to get.
     */
    async getOne(email: string): Promise<User | undefined> {
        const docClient = new DynamoDB.DocumentClient();

        const params = {
            TableName: 'users',
            Key: {
                email,
            },
        };

        const before = new Date();

        const res = await docClient.get(params).promise();

        console.log(`DYN GET SUCCESS - Latency:${new Date().getTime() - before.getTime()}`);

        return res.Item as User;
    }

    /**
     * Attempts to insert a new User into DynamoDB.
     * @param newItem The new User to be added.
     */
    async addOne(newItem: UserAdd): Promise<void> {
        const docClient = new DynamoDB.DocumentClient();

        // Prepare passwordDigest
        const passwordDigest = await bcrypt.hash(newItem.password, 10);

        const params = {
            TableName: 'users',
            Item: {
                email: newItem.email,
                passwordDigest,
            }
        };

        const before = new Date();
        
        const res = await docClient.put(params).promise();

        const after = new Date();

        console.log(`DYN PUT - Latency:${new Date().getTime() - before.getTime()}`);

        return;
    }

};

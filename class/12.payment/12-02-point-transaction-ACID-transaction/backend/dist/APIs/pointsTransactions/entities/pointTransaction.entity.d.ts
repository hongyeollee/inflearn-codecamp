import { User } from 'src/APIs/users/entities/user.entity';
export declare enum POINT_TRANSACTION_STATUS_ENUM {
    PAYMENT = "\uACB0\uC81C\uC644\uB8CC",
    CANCLE = "\uACB0\uC81C\uCDE8\uC18C"
}
export declare class PointTransaction {
    id: string;
    impUid: string;
    amount: number;
    status: POINT_TRANSACTION_STATUS_ENUM;
    user: User;
    createAt: Date;
}

export class TrnCommissionRequest {
	id: number;
	commissionRequestNumber: string;
	commissionRequestDate: string;
	brokerId: number;
	broker: string;
	soldUnitId: number;
	soldUnit: string;
	commissionNumber: string;
	amount: number;
	remarks: string;
	preparedBy: number;
	preparedByUser: string;
	checkedBy: number;
	checkedByUser: string;
	approvedBy: number;
	approvedByUser: string;
	status: string;
	isLocked: boolean;
	createdBy: number;
	createdDateTime: string;
	updatedBy: number;
	updatedDateTime: string;
}
// enum Status {
//   Pending,
//   Approved,
//   Rejected
// }

// TypeScript automatically assigns numbers starting from 0
// Pending = 0, Approved = 1, Rejected = 2

// const orderStatus: Status = Status.Approved;
// console.log(orderStatus); // 1

// =========== STRING ENUMS ==============
// =======================================

enum Status {
  Pending = "PENDING",
  Approved = "APPROVED",
  Rejected = "REJECTED"
}

// Using union type (does basically the same thing)
// type Status = "PENDING" | "APPROVED" | "REJECTED";

const orderStatus: Status = Status.Approved;
console.log(orderStatus); // "APPROVED"


// =========== EXAMPLE ==============
// =======================================

enum UserRole {
  Admin = "ADMIN",
  User = "USER",
  Moderator = "MODERATOR"
}

function checkPermission(role: UserRole) {
  if (role === UserRole.Admin) {
    console.log("Full access");
  } else if (role === UserRole.Moderator) {
    console.log("Limited access");
  } else {
    console.log("Basic access");
  }
}

checkPermission(UserRole.Admin); // "Full access"

// =========== Real-World Example ==============
// =======================================

enum OrderStatus {
  Pending = "PENDING",
  Processing = "PROCESSING",
  Shipped = "SHIPPED",
  Delivered = "DELIVERED",
  Cancelled = "CANCELLED"
}

type Order = {
  id: number;
  status: OrderStatus;
  items: string[];
};

function updateOrderStatus(order: Order, newStatus: OrderStatus) {
  order.status = newStatus;
  
  switch (newStatus) {
    case OrderStatus.Processing:
      console.log("Order is being processed");
      break;
    case OrderStatus.Shipped:
      console.log("Order has been shipped");
      break;
    case OrderStatus.Delivered:
      console.log("Order delivered!");
      break;
  }
}

const myOrder: Order = {
  id: 123,
  status: OrderStatus.Pending,
  items: ["laptop", "mouse"]
};

updateOrderStatus(myOrder, OrderStatus.Processing);
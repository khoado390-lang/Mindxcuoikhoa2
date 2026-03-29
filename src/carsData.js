import lambo3 from "./assets/lambo/Lamborghini/lambo31.jpg";
import lambo1 from "./assets/lambo/LamborghiniAventador/lambo11.jpg";
import lambo4 from "./assets/lambo/LamborghiniRevuelto/lambo41.jpg";
import lambo5 from "./assets/lambo/LamborghiniSian/lambo51.jpg";
import lambo2 from "./assets/lambo/LamborghiniUrus/lambo21.jpg";
import lexus1 from "./assets/lexus/LEXUSRX350h/lambo61.jpg";
import lexus2 from "./assets/lexus/TOYOTALEXUSGX550/lexus31.jpg";
import lexus3 from "./assets/lexus/TOYOTALEXUSLS500H/lexus21.jpg";
import audi1 from "./assets/audi/AudiR8/audi11.jpg";
import audi2 from "./assets/audi/AudiA6/audi21.jpg";
import audi3 from "./assets/audi/AudiS8/audi31.jpg";
import Mer2 from "./assets/Mer/MercedesC300/Mer21.jpg"
import Mer4 from "./assets/Mer/MercedesCLA/Mer41.jpg"
import Mer3 from "./assets/Mer/MercedesE200/Mer31.jpg"
import Mer6 from "./assets/Mer/MercedesG63AMG/Mer61.jpg"
import Mer5 from "./assets/Mer/MercedesGLC/Mer51.jpg"
import Mer7 from "./assets/Mer/MercedesGLS/Mer71.jpg"
import Mer1 from "./assets/Mer/MercedesS-Class/Mer11.jpg"
import Ford8 from "./assets/Ford/FordBronco/ford81.jpg"
import Ford2 from "./assets/Ford/FordEverest/ford21.jpg"
import Ford4 from "./assets/Ford/FordExplorer/ford41.jpg"
import Ford7 from "./assets/Ford/FordFiesta/ford71.jpg"
import Ford5 from "./assets/Ford/FordFocus/ford51.jpg"
import Ford3 from "./assets/Ford/FordMustang/ford31.jpg"
import Ford1 from "./assets/Ford/FordRanger/ford11.jpg"
import Ford6 from "./assets/Ford/FordTerritory/ford61.jpg"
import roll4 from "./assets/ROLLS-ROYCE/Rolls RoyceCullinanBlackBadge/Rolls41.jpg"
import roll1 from "./assets/ROLLS-ROYCE/ROLLS-ROYCECULLINANBLACKBADGE/Rolls11.jpg"
import roll2 from "./assets/ROLLS-ROYCE/ROLLS-ROYCEGHOSTSERIES/Rolls21.jpg"
import roll3 from "./assets/ROLLS-ROYCE/ROLLS-ROYCEPHANTOM/Rolls31.jpg"


export const vehicles = [
  // ===== LAMBORGHINI (8 xe) =====
  {
    id: 1,
    name: "Lamborghini Aventador SVJ",
    type: "Xe mới",
    brand: "Lamborghini",
    price: 12500000000,
    rating: 5,
    image: lambo1,
    description: "Aventador SVJ là siêu xe đỉnh cao với động cơ V12 mạnh mẽ, khả năng tăng tốc vượt trội và thiết kế khí động học tối ưu, mang lại trải nghiệm lái cực kỳ phấn khích."
  },
  {
    id: 2,
    name: "Lamborghini Huracan EVO",
    type: "Xe mới",
    brand: "Lamborghini",
    price: 8500000000,
    rating: 4.9,
    image: lambo2,
    description: "Huracan EVO sở hữu hệ thống điều khiển thông minh, thiết kế sắc nét cùng khả năng vận hành ổn định ở tốc độ cao."
  },
  {
    id: 3,
    name: "Lamborghini Urus",
    type: "Xe mới",
    brand: "Lamborghini",
    price: 10000000000,
    rating: 4.8,
    image: lambo3,
    description: "Urus là SUV siêu sang kết hợp hoàn hảo giữa hiệu năng thể thao và sự tiện nghi dành cho gia đình."
  },
  {
    id: 4,
    name: "Lamborghini Gallardo",
    type: "Xe đã qua sử dụng",
    brand: "Lamborghini",
    price: 4800000000,
    rating: 4.6,
    image: lambo4,
    description: "Gallardo là dòng xe huyền thoại với thiết kế cổ điển, vẫn giữ được sức hút mạnh mẽ trên thị trường xe cũ."
  },
  {
    id: 5,
    name: "Lamborghini Revuelto",
    type: "Xe mới",
    brand: "Lamborghini",
    price: 13500000000,
    rating: 5,
    image: lambo5,
    description: "Revuelto là thế hệ hybrid mới nhất của Lamborghini, mang đến hiệu suất vượt trội cùng công nghệ tiên tiến."
  },
  {
    id: 6,
    name: "LEXUS RX350h PREMIUM 2025",
    type: "Xe mới",
    brand: "LeXus",
    price: 15000000000,
    rating: 5,
    image: lexus1,
    description: "Sian là siêu xe hybrid giới hạn với thiết kế tương lai và hiệu suất đáng kinh ngạc."
  },
  {
    id: 7,
    name: "TOYOTA LEXUS LS500H 2020",
    type: "Xe đã qua sử dụng",
    brand: "LeXus",
    price: 4200000000,
    rating: 4.5,
    image: lexus2,
    description: "Diablo mang phong cách cổ điển, là biểu tượng của Lamborghini trong những năm 90."
  },
  {
    id: 8,
    name: "TOYOTA LEXUS GX550 XANH LÁ 2024",
    type: "Xe đã qua sử dụng",
    brand: "LeXus",
    price: 7000000000,
    rating: 4.7,
    image: lexus3,
    description: "Countach là siêu xe huyền thoại với thiết kế cửa cắt kéo đặc trưng."
  },
  {
    id: 9,
    name: "Audi R8 V10",
    type: "Xe mới",
    brand: "Audi",
    price: 6200000000,
    rating: 4.8,
    image: audi1,
    description: "Audi R8 V10 mang lại trải nghiệm lái thể thao với động cơ mạnh mẽ và thiết kế hiện đại."
  },
  {
    id: 10,
    name: "Audi A6",
    type: "Xe đã qua sử dụng",
    brand: "Audi",
    price: 1700000000,
    rating: 4.5,
    image: audi2,
    description: "A6 là mẫu sedan sang trọng, phù hợp cho cả công việc và gia đình."
  },
  {
    id: 11,
    name: "Audi S8",
    type: "Xe mới",
    brand: "Audi",
    price: 3500000000,
    rating: 4.7,
    image: audi3,
    description: "Q7 mang lại không gian rộng rãi, công nghệ hiện đại và cảm giác lái êm ái."
  },
  {
    id: 12,
    name: "ROLLS-ROYCE CULLINAN BLACK BADGE 2025",
    type: "Xe đã qua sử dụng",
    brand: "Audi",
    price: 1200000000,
    rating: 4.4,
    image: roll1,
    description: "A4 có thiết kế thanh lịch, tiết kiệm nhiên liệu và phù hợp đô thị."
  },
  {
    id: 13,
    name: "ROLLS-ROYCE GHOST SERIES II EWB 2015",
    type: "Xe đã qua sử dụng",
    brand: "Audi",
    price: 4500000000,
    rating: 4.9,
    image: roll2,
    description: "e-tron GT là dòng xe điện cao cấp với hiệu suất mạnh mẽ và thân thiện môi trường."
  },
  {
    id: 14,
    name: "ROLLS-ROYCE PHANTOM LỬA THIÊNG",
    type: "Xe mới",
    brand: "Audi",
    price: 2800000000,
    rating: 4.6,
    image: roll3,
    description: "Q5 là SUV tầm trung, cân bằng giữa hiệu năng và tiện nghi."
  },
  {
    id: 15,
    name: "Rolls-Royce Cullinan Black Badge",
    type: "Xe đã qua sử dụng",
    brand: "Audi",
    price: 1500000000,
    rating: 4.5,
    image: roll4,
    description: "Audi TT là coupe thể thao nhỏ gọn, phong cách trẻ trung."
  },

  // ===== MERCEDES (7 xe) =====
  {
    id: 16,
    name: "Mercedes S-Class",
    type: "Xe mới",
    brand: "Mercedes",
    price: 5500000000,
    rating: 5,
    image: Mer1,
    description: "S-Class là biểu tượng của sự sang trọng với nội thất cao cấp và công nghệ hàng đầu."
  },
  {
    id: 17,
    name: "Mercedes C300",
    type: "Xe mới",
    brand: "Mercedes",
    price: 2500000000,
    rating: 4.7,
    image: Mer2,
    description: "C300 mang lại trải nghiệm lái êm ái, thiết kế hiện đại và tiện nghi cao cấp."
  },
  {
    id: 18,
    name: "Mercedes E200",
    type: "Xe đã qua sử dụng",
    brand: "Mercedes",
    price: 1800000000,
    rating: 4.5,
    image: Mer3,
    description: "E200 là dòng sedan phổ biến với độ bền và sự thoải mái."
  },
  {
    id: 19,
    name: "Mercedes GLC",
    type: "Xe mới",
    brand: "Mercedes",
    price: 2800000000,
    rating: 4.6,
    image: Mer4,
    description: "GLC là SUV tiện nghi, phù hợp gia đình."
  },
  {
    id: 20,
    name: "Mercedes G63 AMG",
    type: "Xe mới",
    brand: "Mercedes",
    price: 8000000000,
    rating: 4.9,
    image: Mer5,
    description: "G63 AMG là SUV mạnh mẽ với thiết kế hầm hố và hiệu suất cao."
  },
  {
    id: 21,
    name: "Mercedes CLA",
    type: "Xe đã qua sử dụng",
    brand: "Mercedes",
    price: 1400000000,
    rating: 4.4,
    image: Mer6,
    description: "CLA có thiết kế coupe thể thao, phù hợp giới trẻ."
  },
  {
    id: 22,
    name: "Mercedes GLS",
    type: "Xe mới",
    brand: "Mercedes",
    price: 6000000000,
    rating: 4.8,
    image: Mer7,
    description: "GLS là SUV full-size với không gian rộng rãi và sang trọng."
  },

  // ===== FORD (8 xe) =====
  {
    id: 23,
    name: "Ford Ranger",
    type: "Xe mới",
    brand: "Ford",
    price: 900000000,
    rating: 4.5,
    image: Ford1,
    description: "Ranger là dòng bán tải mạnh mẽ, phù hợp địa hình."
  },
  {
    id: 24,
    name: "Ford Everest",
    type: "Xe mới",
    brand: "Ford",
    price: 1200000000,
    rating: 4.6,
    image: Ford2,
    description: "Everest là SUV gia đình với khả năng off-road tốt."
  },
  {
    id: 25,
    name: "Ford Mustang",
    type: "Xe mới",
    brand: "Ford",
    price: 3500000000,
    rating: 4.9,
    image: Ford3,
    description: "Mustang là biểu tượng xe thể thao Mỹ."
  },
  {
    id: 26,
    name: "Ford Explorer",
    type: "Xe đã qua sử dụng",
    brand: "Ford",
    price: 2000000000,
    rating: 4.4,
    image: Ford4,
    description: "Explorer rộng rãi, tiện nghi."
  },
  {
    id: 27,
    name: "Ford Focus",
    type: "Xe đã qua sử dụng",
    brand: "Ford",
    price: 600000000,
    rating: 4.3,
    image: Ford5,
    description: "Xe nhỏ gọn, tiết kiệm."
  },
  {
    id: 28,
    name: "Ford Territory",
    type: "Xe mới",
    brand: "Ford",
    price: 900000000,
    rating: 4.5,
    image: Ford6,
    description: "SUV đô thị hiện đại."
  },
  {
    id: 29,
    name: "Ford Fiesta",
    type: "Xe đã qua sử dụng",
    brand: "Ford",
    price: 500000000,
    rating: 4.2,
    image: Ford7,
    description: "Xe nhỏ gọn, dễ sử dụng."
  },
  {
    id: 30,
    name: "Ford Bronco",
    type: "Xe mới",
    brand: "Ford",
    price: 2800000000,
    rating: 4.7,
    image: Ford8,
    description: "Xe off-road mạnh mẽ, cá tính."
  },

//   // ===== MOTOR (10 xe) =====
//   {
//     id: 31,
//     name: "Yamaha R1",
//     type: "Moto",
//     brand: "Yamaha",
//     price: 700000000,
//     rating: 4.8,
//     image: "https://source.unsplash.com/400x300/?yamaha-r1",
//     description: "Sportbike mạnh mẽ với tốc độ vượt trội."
//   },
//   {
//     id: 32,
//     name: "Honda CBR1000RR",
//     type: "Moto",
//     brand: "Honda",
//     price: 650000000,
//     rating: 4.7,
//     image: "https://source.unsplash.com/400x300/?honda-cbr",
//     description: "Thiết kế thể thao, vận hành mượt mà."
//   },
//   {
//     id: 33,
//     name: "Ducati Panigale V4",
//     type: "Moto",
//     brand: "Ducati",
//     price: 900000000,
//     rating: 5,
//     image: "https://source.unsplash.com/400x300/?ducati",
//     description: "Siêu moto cao cấp của Ý."
//   },
//   {
//     id: 34,
//     name: "Kawasaki Ninja ZX10R",
//     type: "Moto",
//     brand: "Kawasaki",
//     price: 800000000,
//     rating: 4.8,
//     image: "https://source.unsplash.com/400x300/?kawasaki",
//     description: "Hiệu suất cao, thiết kế mạnh mẽ."
//   },
//   {
//     id: 35,
//     name: "BMW S1000RR",
//     type: "Moto",
//     brand: "BMW",
//     price: 850000000,
//     rating: 4.9,
//     image: "https://source.unsplash.com/400x300/?bmw-bike",
//     description: "Công nghệ tiên tiến, vận hành ổn định."
//   },
//   {
//     id: 36,
//     name: "Harley Davidson",
//     type: "Moto",
//     brand: "Harley",
//     price: 1000000000,
//     rating: 4.7,
//     image: "https://source.unsplash.com/400x300/?harley",
//     description: "Phong cách cổ điển, đậm chất Mỹ."
//   },
//   {
//     id: 37,
//     name: "Suzuki GSX-R1000",
//     type: "Moto",
//     brand: "Suzuki",
//     price: 600000000,
//     rating: 4.6,
//     image: "https://source.unsplash.com/400x300/?suzuki",
//     description: "Bền bỉ, mạnh mẽ."
//   },
//   {
//     id: 38,
//     name: "KTM Duke 390",
//     type: "Moto",
//     brand: "KTM",
//     price: 200000000,
//     rating: 4.5,
//     image: "https://source.unsplash.com/400x300/?ktm",
//     description: "Nhỏ gọn, linh hoạt."
//   },
//   {
//     id: 39,
//     name: "Yamaha MT-09",
//     type: "Moto",
//     brand: "Yamaha",
//     price: 300000000,
//     rating: 4.6,
//     image: "https://source.unsplash.com/400x300/?yamaha-mt",
//     description: "Thiết kế hiện đại, cá tính."
//   },
//   {
//     id: 40,
//     name: "Honda Winner X",
//     type: "Moto",
//     brand: "Honda",
//     price: 50000000,
//     rating: 4.3,
//     image: "https://source.unsplash.com/400x300/?motorbike",
//     description: "Xe phổ thông, tiết kiệm nhiên liệu."
//   }
];
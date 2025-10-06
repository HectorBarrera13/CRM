import { useState } from "react";

// 1. Interfaz para la estructura de datos de cada elemento de pago
interface PaymentItem {
  id: string;
  title: string;
  type: "cita" | "tratamiento";
  specialty: string;
  description: string;
  // Usaremos una URL de imagen genérica para el avatar
  imageUrl: string;
}

// 2. Datos de ejemplo (mock data) que siguen la estructura de la imagen
const mockPaymentItems: PaymentItem[] = [
  {
    id: "1",
    title: "Cita 1",
    type: "cita",
    specialty: "Especialidad",
    description: "Description",
    imageUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
  },
  {
    id: "2",
    title: "Tratamiento 1",
    type: "tratamiento",
    specialty: "Especialidad",
    description: "Description",
    imageUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704e",
  },
  {
    id: "3",
    title: "Cita 2",
    type: "cita",
    specialty: "Especialidad",
    description: "Description",
    imageUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704f",
  },
  {
    id: "4",
    title: "Tratamiento 2",
    type: "tratamiento",
    specialty: "Especialidad",
    description: "Description",
    imageUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704g",
  },
];

function PaymentPage() {
  // Estado para manejar los elementos de pago. Inicializado con los datos de ejemplo.
  const [paymentItems] = useState<PaymentItem[]>(mockPaymentItems);

  return (
    // Contenedor principal con espaciado vertical, similar a StaffPage
    <div className="space-y-8 p-6 md:p-8 h-full flex flex-col">
      {/* Encabezado de la página */}
      <div>
        <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-200">
          Payment View
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mt-2">
          Seleccione los items y proceda con el pago o registro del cobro.
        </p>
      </div>

      {/* Contenedor de la cuadrícula de pagos */}
      <div className="flex-grow">
        {/* Cuadrícula responsiva para los elementos de pago */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {paymentItems.map((item) => (
            // Card individual, con estilos tomados de StaffPage
            <div
              key={item.id}
              className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 p-6 hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <img
                  src={item.imageUrl}
                  alt={`Avatar for ${item.title}`}
                  className="w-14 h-14 rounded-full object-cover"
                />
                {/* Detalles del item */}
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    {item.specialty}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sección de botones en la parte inferior */}
      <div className="mt-auto pt-6 border-t border-slate-200 dark:border-slate-700 space-y-3">
        <button className="w-full px-4 py-3 bg-slate-800 hover:bg-slate-900 text-white dark:bg-slate-700 dark:hover:bg-slate-600 rounded-lg transition-colors font-semibold">
          Realizar pago externo
        </button>
        <button className="w-full px-4 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 dark:bg-slate-600 dark:hover:bg-slate-500 dark:text-slate-200 rounded-lg transition-colors font-semibold">
          Registrar cobro externo
        </button>
      </div>
    </div>
  );
}

export default PaymentPage;

export const Statistics = () => {
   interface statsProps {
     quantity: string;
     description: string;
   }
 
   const stats: statsProps[] = [
     {
       quantity: "2+",
       description: "Years of Experience",
     },
     {
       quantity: "1K+",
       description: "Subscribers",
     },
     {
       quantity: "250+",
       description: "Companies",
     },
     {
       quantity: "120+",
       description: "Employees",
     },
   ];
 
   return (
     <section id="statistics">
       <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
         {stats.map(({ quantity, description }: statsProps) => (
           <div
             key={description}
             className="space-y-2 text-center"
           >
             <h2 className="base:text-2xl xs:text-3xl md:text-4xl font-bold ">{quantity}</h2>
             <p className="base:text-[14px] xs:text-lg md:text-xl text-muted-foreground">{description}</p>
           </div>
         ))}
       </div>
     </section>
   );
 };
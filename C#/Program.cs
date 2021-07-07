using System;

namespace Curso_de_.NET_core
{
    class Program
    {
        static void Main(string[] args)
        {
            int year = Convert.ToInt16("12");
            double doble = 2.5;
            string nombre = "Julian";
            String nombres = "Alex, Joel, Julian";
            decimal decimals = 2.07M;
            float flotante = 8.0F;
            Console.WriteLine("Hello {2} en C#! {0} {1}", year, doble, nombre);
            Console.WriteLine(nombres + " {0} {1} {2} {3}", year, doble, nombre, decimals);

            Console.ReadLine();
        }
        //float 7 digitos 32 bits
        //double 15-16 digitos 64 bits
        //decimal 28-29 digitos 128 bits
    }
}

namespace CSharp.Method_Hiding;

public class Employee
{
    public string FirstName;
    public string LastName;
    
    public void PrintFullName()
    {
        Console.WriteLine($"{FirstName} {LastName}");
    }
}

public class PartTimeEmployee : Employee
{

    public new void PrintFullName(bool baseMethod)
    {
        if (baseMethod)
        {
            base.PrintFullName();
        }
        else
        {
            Console.WriteLine($"{FirstName} {LastName} - Contractor");
        }
    }
}

public class FullTimeEmployee : Employee
{
    
}

public class MainClass
{
    public static void main()
    {
        PartTimeEmployee PTE = new PartTimeEmployee();
        PTE.FirstName = "Part Time";
        PTE.LastName = "Employee";
        PTE.PrintFullName(false);
        
        FullTimeEmployee FTE  = new FullTimeEmployee();
        FTE.FirstName = "Full Time";
        FTE.LastName = "Employee";
        FTE.PrintFullName();
    }
}
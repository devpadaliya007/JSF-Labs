#include <stdio.h>

//practical-1
    int i;
    for(i=1;i<=10;i++)
    {
        printf("%d",i);
    }
    //practical-2
    int sum=0;
    int i,n=123,rem;
    while(n>0)
    {
        rem=n%10;
        sum=sum+rem;
        n=n/10;
    }
    printf("sum is %d",sum);
     //practical-3
    int n,i,fact=1;
    printf("enter number here:");
    scanf("%d",&n);
    for(i=1;i<=n;i++)
    {
        fact=fact*i;
    }
    printf("factorial is %d",fact);
//practical-4
    #include <stdio.h>
void main() {
   int n,r=0,a=0;
   printf("enter number here:");
    scanf("%d",&n);
    while(n>0)
    {
        r=n%10;
        n=n/10;
        a=(a*10)+r;
    }
    printf("%d",a);
}
//practical-5
int i,j;
   for(i=0;i<=5;i++)
   {
       for(j=0;j<i;j++)
       {
           printf("*");
       }
       printf("\n");
   }
//practical-6
int i,j,k;
   for(i=0;i<5;i++)
   {
       for(j=0;j<5-i;j++)
       {
           printf(" ");
       }
       for(k=0;k<=2*i;k++)
       {
           printf("*");
       }
       printf("\n");
   }
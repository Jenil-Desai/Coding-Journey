import sys

from utils.welcome_heading import welcome_heading
from utils.getch import getch

from schema.Categorys import Category
from schema.Products import Products
from schema.Users import Users

import settings

def homepage():
    welcome_heading()

    categories = Category.objects
    count = 1

    for categorie in categories:
        print(f"\n{count}. {categorie.name}")
        count+=1
    
    currUser = Users.objects(username=settings.userId).first()

    if currUser.cart != []:
        print(f"\n{count}. Cart")
    
    if currUser.isAdmin:
        if currUser.cart != []:
            print(f"\n{count+1}. Admin Dashboard")
            choice = int(input(f"\n\nSelect Product Category | Cart-{count} | Admin Dashboard-{count+1} | Exit-0 : "))
            if choice == 0:
                sys.exit(0)
            elif choice == count:
                cart()
            elif choice == count+1:
                admin_dashboard()
            elif choice < 0 or choice > len(categories):
                print("\n\nInvalid Selection")
                getch()
                homepage()
            else:
                settings.category_number = choice-1
                category_products()
        else:
            print(f"\n{count}. Admin Dashboard")
            choice = int(input(f"\n\nSelect Product Category | Admin Dashboard-{count} | Exit-0 :"))
            if choice == 0:
                sys.exit(0)
            elif choice == count:
                admin_dashboard()
            elif choice < 0 or choice > len(categories):
                print("\n\nInvalid Selection")
                getch()
                homepage()
            else:
                settings.category_number = choice-1
                category_products()
    else:
        if currUser.cart != []:
            choice = int(input(f"\n\nSelect Product Category | Cart-{count} | Exit-0 : "))
            if choice == 0:
                sys.exit(0)
            elif choice == count:
                cart()
            elif choice < 0 or choice > len(categories):
                print("\n\nInvalid Selection")
                getch()
                homepage()
            else:
                settings.category_number = choice-1
                category_products()
        else:
            choice = int(input(f"\n\nSelect Product Categpry | Exit-0 : "))
            if choice == 0:
                sys.exit(0)
            elif choice < 0 or choice > len(categories):
                print("\n\nInvalid Selection")
                getch()
                homepage()
            else:
                settings.category_number = choice-1
                category_products()


def category_products():
    welcome_heading()

    category = Category.objects
    final_category = category[settings.category_number]

    count = 1
    for product in final_category.products:
        print(f"\n{count}. {product.name} --- Rs.{product.price}")
        count+=1

    choice = int(input("\n\nAdd To Cart | Back-0 : "))

    if choice == 0:
        homepage()
    elif choice < 0 or choice > len(final_category.products):
        print("\n\nInvalid Selection")
        getch()
        category_products()
    else:
        products = Products.objects
        selected_product = products[choice-1]
        Users.objects(username=settings.userId).update_one(push__cart=selected_product.id)
        homepage()

def cart():
    welcome_heading()

    currUser = Users.objects(username=settings.userId).first()
    count = 1
    for product in currUser.cart:
        print(f"\n{count}. {product.name} --- {product.price}")

    choice = int(input("\n CheckOut-3 | Clear-2 | Back-1 : "))

    if choice == 1:
        homepage()
    elif choice == 2:
        Users.objects(username=settings.userId).update_one(cart=[])
        print("\nCart Cleared Succesfully")
        getch()
        homepage()
    elif choice == 3:
        check_out()
    else:
        cart()

def admin_dashboard():
    welcome_heading()
    categories = Category.objects
    count = 1

    for categorie in categories:
        print(f"\n{count}. {categorie.name}")
        pro_cnt = 1
        for product in categorie.products:
            print(f"\n\t{pro_cnt}. {product.name} --- {product.price}")
            pro_cnt+=1
        count+=1

    choice = int(input("\n\nAdd Category-1 | Add Product-2 | Delete Category-3 | Delete Product-4 | Back-0 :"))

    if choice == 0:
        homepage()
    elif choice == 1:
        cat_name = input("\nEnter Category Name : ")
        newCategorie = Category(name=cat_name)
        newCategorie.save()
        print("New Category Created Successfully")
        getch()
        admin_dashboard()
    elif choice == 2:
        pro_cat = input("\nEnter Category For Product : ")
        pro_name = input("\nEnter Product Name : ")
        pro_price = float(input("\nEnter Product Price : "))
        newProduct = Products(name=pro_name,price=pro_price)
        newProduct.save()
        Category.objects(name=pro_cat).update_one(push__products=newProduct.id)
        print("\nNew Product Created Successfully")
        getch()
        admin_dashboard()
    elif choice == 3:
        del_category = input("\nEnter Category Name : ")
        result = Category.objects(name=del_category).delete()
        if result:
            print(f"Category {del_category} deleted successfully.")
        else:
            print(f"Category {del_category} not found.")
        getch()
        admin_dashboard()
    elif choice == 4:
        del_product = input("\nEnter Product Name : ")
        result = Products.objects(name=del_product).delete()
        if result:
            print(f"Category {del_product} deleted successfully.")
        else:
            print(f"Category {del_product} not found.")
        getch()
        admin_dashboard()
    else:
        print("\nInvalid Selection")
        admin_dashboard()

def check_out():
    welcome_heading()

    currUser = Users.objects(username=settings.userId).first()
    count = 1
    total = 0;

    for product in currUser.cart:
        print(f"\n{count}. {product.name} --- {product.price}")
        count+=1
        total = total + product.price
    
    print(f"\nTotal : {total}")
    print("\n\nThanks For Buying - Visit Again")
    getch()
    Users.objects(username=settings.userId).update_one(cart=[])
    homepage()
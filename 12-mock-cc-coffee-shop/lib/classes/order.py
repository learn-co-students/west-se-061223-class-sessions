class Order:
    all = []

    def __init__(self, customer, coffee, price):
        self.customer = customer
        self.coffee = coffee
        self.price = price
        Order.all.append(self)

    @property
    def price(self):
        return self._price

    @price.setter
    def price(self, value):
        if type(value) in (int, float) and 1 <= value <= 10:
            self._price = value
        else:
            raise Exception("price invalid")

    @property
    def customer(self):
        return self._customer

    @customer.setter
    def customer(self, customer):
        from classes.customer import Customer

        if isinstance(customer, Customer):
            self._customer = customer
        else:
            raise Exception

    @property
    def coffee(self):
        return self._coffee

    @coffee.setter
    def coffee(self, value):
        from classes.coffee import Coffee

        if isinstance(value, Coffee):
            self._coffee = value
        else:
            raise Exception

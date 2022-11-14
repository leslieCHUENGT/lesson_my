package com.itheima;

import com.itheima.service.BookService;
import com.itheima.service.impl.BookServiceImpl;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class App {
    public static void main(String[] args) {
        /*BookService bookService = new BookServiceImpl();
        bookService.save();*/
        //»ñÈ¡IOCÈÝÆ÷
        ApplicationContext context=new ClassPathXmlApplicationContext("applicationContext.xml");
        BookService bookService = (BookService) context.getBean("bookService");
        bookService.save();



    }
}

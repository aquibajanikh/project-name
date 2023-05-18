package com.example.review_backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;  

@RestController  
public class SpringBootJdbcController {  
    @Autowired  
    JdbcTemplate jdbc;    
    @RequestMapping("/insert")  
    public String index(){  
        jdbc.execute("INSERT INTO `sys`.`all_items` (`item_id`, `item_title`, `item_price`) VALUES ('4', 'GAqgqg', '750')");
        return"data inserted Successfully";  
    }  
}


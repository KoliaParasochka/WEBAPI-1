﻿using System;
using System.Collections.Generic;
using System.Text;

namespace Domain.Models
{
    public class RegisterModel
    {
        public string LastName { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
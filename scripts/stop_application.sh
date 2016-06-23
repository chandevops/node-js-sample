#!/bin/bash
if service --status-all | grep -Fq 'apache2'; then    
  service apache2 stop
fi
service apache

FROM ruby:3.1

# Install dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    cmake \
    libxml2-dev \
    libxslt-dev \
    zlib1g-dev \
    && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /usr/src/app

# Install bundler
RUN gem install bundler

# Copy Gemfile and install gems
COPY Gemfile Gemfile.lock ./
RUN bundle install

# Copy site files
COPY . .

# Expose port for Jekyll
EXPOSE 4000

# Command to serve the site
CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0"]


import { Card } from "react-bootstrap";
import Image from "next/image";
import farming from "../../public/assets/images/home/farming/form.png"

export default function Farming() {
  return (
    <div className="form-sec">
      <div className="contaier">
        <section className="section">
          <div className="col-md-12">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <h3 className="header-tag header-padding">
                    Fresh farm vegetables (via environment friendly farming)
                  </h3>
                  <div style={{ padding: "10px" }}>
                    <Card className="farm-card">
                      <Card.Title className="subheader-tag">
                        Horticulture
                      </Card.Title>
                      <Card.Text className="card-text">
                        20 years ago, this land was uncultivable and a brick
                        kiln was located here.
                        <div className="card-text">
                          Then the Heartfulness meditation center started
                          getting established and a labour of love transformed
                          it from barren, burnt, baked earth strewn with stones
                          and broken bricks to beautifully maintained gardens
                          and bountiful fields that it is today.
                        </div>
                      </Card.Text>
                    </Card>
                  </div>
                  <div style={{ padding: "10px" }}>
                    <Card className="farm-card-two">
                      <Card.Title className="subheader-tag">
                        Fruits and Vegetables
                      </Card.Title>
                      <Card.Text className="card-text">
                        Regular cultivation of seasonal vegetables is carried
                        out and the same are available for wellness of seekers.
                        Leafy vegetables include saags like Palak, Sarson,
                        Kulfa, Kalmi, Punarnava, Methi, Lettuce, Amaranthus,
                        Mint, Coriander, Basil Creeper Vegetables include
                        Karela, Lauki, Turai, Beans, Gwar Phali, Peas, Pumpkins,
                        Root Vegetables include Beetroots, Carrots, Turnips,
                        Radishes, Spring onions. Other vegetables include
                        Tomatoes, Brinjals, Okra, Cauliflowers, Cabbages. Fruits
                        include Lemons, Mousambi, Guavas, Shahtoot, Papaya,
                        Pomegranates etc.
                      </Card.Text>
                    </Card>
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <br />
                    <Image
                      src={farming.src}
                      alt="tree plants at heartfulness meditation center in Gurugram"
                      className="lazyload"
                      width={583}
                      height={564}

                    />
                  </div>
                  <div style={{ padding: "10px" }}>
                    <Card className="farm-card-nursurey">
                      <Card.Title className="subheader-tag">Nursery</Card.Title>
                      <Card.Text className="card-text">
                        Ornamental Plants like varieties of Crotons, Coleus,
                        Money plants and hanging baskets; Seasonal blooms like
                        Pansies, Petunias, Dahlias, Cosmos, Zinnias and
                        Portulacas; medicinal plants like Aloe Vera, Tulsi and
                        Lemon grass
                      </Card.Text>
                    </Card>
                  </div>
                  <div />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

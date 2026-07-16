# `ec2TransitGatewayConnect` Submodule <a name="`ec2TransitGatewayConnect` Submodule" id="@cdktn/provider-aws.ec2TransitGatewayConnect"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2TransitGatewayConnect <a name="Ec2TransitGatewayConnect" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ec2_transit_gateway_connect aws_ec2_transit_gateway_connect}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.Initializer"></a>

```java
import io.cdktn.providers.aws.ec2_transit_gateway_connect.Ec2TransitGatewayConnect;

Ec2TransitGatewayConnect.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .transitGatewayId(java.lang.String)
    .transportAttachmentId(java.lang.String)
//  .id(java.lang.String)
//  .protocol(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(Ec2TransitGatewayConnectTimeouts)
//  .transitGatewayDefaultRouteTableAssociation(java.lang.Boolean|IResolvable)
//  .transitGatewayDefaultRouteTablePropagation(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.Initializer.parameter.transitGatewayId">transitGatewayId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ec2_transit_gateway_connect#transit_gateway_id Ec2TransitGatewayConnect#transit_gateway_id}. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.Initializer.parameter.transportAttachmentId">transportAttachmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ec2_transit_gateway_connect#transport_attachment_id Ec2TransitGatewayConnect#transport_attachment_id}. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ec2_transit_gateway_connect#id Ec2TransitGatewayConnect#id}. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.Initializer.parameter.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ec2_transit_gateway_connect#protocol Ec2TransitGatewayConnect#protocol}. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ec2_transit_gateway_connect#tags Ec2TransitGatewayConnect#tags}. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ec2_transit_gateway_connect#tags_all Ec2TransitGatewayConnect#tags_all}. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeouts">Ec2TransitGatewayConnectTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.Initializer.parameter.transitGatewayDefaultRouteTableAssociation">transitGatewayDefaultRouteTableAssociation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ec2_transit_gateway_connect#transit_gateway_default_route_table_association Ec2TransitGatewayConnect#transit_gateway_default_route_table_association}. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.Initializer.parameter.transitGatewayDefaultRouteTablePropagation">transitGatewayDefaultRouteTablePropagation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ec2_transit_gateway_connect#transit_gateway_default_route_table_propagation Ec2TransitGatewayConnect#transit_gateway_default_route_table_propagation}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `transitGatewayId`<sup>Required</sup> <a name="transitGatewayId" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.Initializer.parameter.transitGatewayId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ec2_transit_gateway_connect#transit_gateway_id Ec2TransitGatewayConnect#transit_gateway_id}.

---

##### `transportAttachmentId`<sup>Required</sup> <a name="transportAttachmentId" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.Initializer.parameter.transportAttachmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ec2_transit_gateway_connect#transport_attachment_id Ec2TransitGatewayConnect#transport_attachment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ec2_transit_gateway_connect#id Ec2TransitGatewayConnect#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.Initializer.parameter.protocol"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ec2_transit_gateway_connect#protocol Ec2TransitGatewayConnect#protocol}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ec2_transit_gateway_connect#region Ec2TransitGatewayConnect#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ec2_transit_gateway_connect#tags Ec2TransitGatewayConnect#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ec2_transit_gateway_connect#tags_all Ec2TransitGatewayConnect#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeouts">Ec2TransitGatewayConnectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ec2_transit_gateway_connect#timeouts Ec2TransitGatewayConnect#timeouts}

---

##### `transitGatewayDefaultRouteTableAssociation`<sup>Optional</sup> <a name="transitGatewayDefaultRouteTableAssociation" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.Initializer.parameter.transitGatewayDefaultRouteTableAssociation"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ec2_transit_gateway_connect#transit_gateway_default_route_table_association Ec2TransitGatewayConnect#transit_gateway_default_route_table_association}.

---

##### `transitGatewayDefaultRouteTablePropagation`<sup>Optional</sup> <a name="transitGatewayDefaultRouteTablePropagation" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.Initializer.parameter.transitGatewayDefaultRouteTablePropagation"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ec2_transit_gateway_connect#transit_gateway_default_route_table_propagation Ec2TransitGatewayConnect#transit_gateway_default_route_table_propagation}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.resetTransitGatewayDefaultRouteTableAssociation">resetTransitGatewayDefaultRouteTableAssociation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.resetTransitGatewayDefaultRouteTablePropagation">resetTransitGatewayDefaultRouteTablePropagation</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.putTimeouts"></a>

```java
public void putTimeouts(Ec2TransitGatewayConnectTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeouts">Ec2TransitGatewayConnectTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.resetId"></a>

```java
public void resetId()
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.resetProtocol"></a>

```java
public void resetProtocol()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTransitGatewayDefaultRouteTableAssociation` <a name="resetTransitGatewayDefaultRouteTableAssociation" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.resetTransitGatewayDefaultRouteTableAssociation"></a>

```java
public void resetTransitGatewayDefaultRouteTableAssociation()
```

##### `resetTransitGatewayDefaultRouteTablePropagation` <a name="resetTransitGatewayDefaultRouteTablePropagation" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.resetTransitGatewayDefaultRouteTablePropagation"></a>

```java
public void resetTransitGatewayDefaultRouteTablePropagation()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2TransitGatewayConnect resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.isConstruct"></a>

```java
import io.cdktn.providers.aws.ec2_transit_gateway_connect.Ec2TransitGatewayConnect;

Ec2TransitGatewayConnect.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.ec2_transit_gateway_connect.Ec2TransitGatewayConnect;

Ec2TransitGatewayConnect.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.ec2_transit_gateway_connect.Ec2TransitGatewayConnect;

Ec2TransitGatewayConnect.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.ec2_transit_gateway_connect.Ec2TransitGatewayConnect;

Ec2TransitGatewayConnect.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Ec2TransitGatewayConnect.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Ec2TransitGatewayConnect resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Ec2TransitGatewayConnect to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Ec2TransitGatewayConnect that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ec2_transit_gateway_connect#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Ec2TransitGatewayConnect to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference">Ec2TransitGatewayConnectTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeouts">Ec2TransitGatewayConnectTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.transitGatewayDefaultRouteTableAssociationInput">transitGatewayDefaultRouteTableAssociationInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.transitGatewayDefaultRouteTablePropagationInput">transitGatewayDefaultRouteTablePropagationInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.transitGatewayIdInput">transitGatewayIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.transportAttachmentIdInput">transportAttachmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.transitGatewayDefaultRouteTableAssociation">transitGatewayDefaultRouteTableAssociation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.transitGatewayDefaultRouteTablePropagation">transitGatewayDefaultRouteTablePropagation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.transitGatewayId">transitGatewayId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.transportAttachmentId">transportAttachmentId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.timeouts"></a>

```java
public Ec2TransitGatewayConnectTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference">Ec2TransitGatewayConnectTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.timeoutsInput"></a>

```java
public IResolvable|Ec2TransitGatewayConnectTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeouts">Ec2TransitGatewayConnectTimeouts</a>

---

##### `transitGatewayDefaultRouteTableAssociationInput`<sup>Optional</sup> <a name="transitGatewayDefaultRouteTableAssociationInput" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.transitGatewayDefaultRouteTableAssociationInput"></a>

```java
public java.lang.Boolean|IResolvable getTransitGatewayDefaultRouteTableAssociationInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `transitGatewayDefaultRouteTablePropagationInput`<sup>Optional</sup> <a name="transitGatewayDefaultRouteTablePropagationInput" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.transitGatewayDefaultRouteTablePropagationInput"></a>

```java
public java.lang.Boolean|IResolvable getTransitGatewayDefaultRouteTablePropagationInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `transitGatewayIdInput`<sup>Optional</sup> <a name="transitGatewayIdInput" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.transitGatewayIdInput"></a>

```java
public java.lang.String getTransitGatewayIdInput();
```

- *Type:* java.lang.String

---

##### `transportAttachmentIdInput`<sup>Optional</sup> <a name="transportAttachmentIdInput" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.transportAttachmentIdInput"></a>

```java
public java.lang.String getTransportAttachmentIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `transitGatewayDefaultRouteTableAssociation`<sup>Required</sup> <a name="transitGatewayDefaultRouteTableAssociation" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.transitGatewayDefaultRouteTableAssociation"></a>

```java
public java.lang.Boolean|IResolvable getTransitGatewayDefaultRouteTableAssociation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `transitGatewayDefaultRouteTablePropagation`<sup>Required</sup> <a name="transitGatewayDefaultRouteTablePropagation" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.transitGatewayDefaultRouteTablePropagation"></a>

```java
public java.lang.Boolean|IResolvable getTransitGatewayDefaultRouteTablePropagation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `transitGatewayId`<sup>Required</sup> <a name="transitGatewayId" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.transitGatewayId"></a>

```java
public java.lang.String getTransitGatewayId();
```

- *Type:* java.lang.String

---

##### `transportAttachmentId`<sup>Required</sup> <a name="transportAttachmentId" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.transportAttachmentId"></a>

```java
public java.lang.String getTransportAttachmentId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2TransitGatewayConnectConfig <a name="Ec2TransitGatewayConnectConfig" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.ec2_transit_gateway_connect.Ec2TransitGatewayConnectConfig;

Ec2TransitGatewayConnectConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .transitGatewayId(java.lang.String)
    .transportAttachmentId(java.lang.String)
//  .id(java.lang.String)
//  .protocol(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(Ec2TransitGatewayConnectTimeouts)
//  .transitGatewayDefaultRouteTableAssociation(java.lang.Boolean|IResolvable)
//  .transitGatewayDefaultRouteTablePropagation(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectConfig.property.transitGatewayId">transitGatewayId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ec2_transit_gateway_connect#transit_gateway_id Ec2TransitGatewayConnect#transit_gateway_id}. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectConfig.property.transportAttachmentId">transportAttachmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ec2_transit_gateway_connect#transport_attachment_id Ec2TransitGatewayConnect#transport_attachment_id}. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ec2_transit_gateway_connect#id Ec2TransitGatewayConnect#id}. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectConfig.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ec2_transit_gateway_connect#protocol Ec2TransitGatewayConnect#protocol}. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ec2_transit_gateway_connect#tags Ec2TransitGatewayConnect#tags}. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ec2_transit_gateway_connect#tags_all Ec2TransitGatewayConnect#tags_all}. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeouts">Ec2TransitGatewayConnectTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectConfig.property.transitGatewayDefaultRouteTableAssociation">transitGatewayDefaultRouteTableAssociation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ec2_transit_gateway_connect#transit_gateway_default_route_table_association Ec2TransitGatewayConnect#transit_gateway_default_route_table_association}. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectConfig.property.transitGatewayDefaultRouteTablePropagation">transitGatewayDefaultRouteTablePropagation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ec2_transit_gateway_connect#transit_gateway_default_route_table_propagation Ec2TransitGatewayConnect#transit_gateway_default_route_table_propagation}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `transitGatewayId`<sup>Required</sup> <a name="transitGatewayId" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectConfig.property.transitGatewayId"></a>

```java
public java.lang.String getTransitGatewayId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ec2_transit_gateway_connect#transit_gateway_id Ec2TransitGatewayConnect#transit_gateway_id}.

---

##### `transportAttachmentId`<sup>Required</sup> <a name="transportAttachmentId" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectConfig.property.transportAttachmentId"></a>

```java
public java.lang.String getTransportAttachmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ec2_transit_gateway_connect#transport_attachment_id Ec2TransitGatewayConnect#transport_attachment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ec2_transit_gateway_connect#id Ec2TransitGatewayConnect#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectConfig.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ec2_transit_gateway_connect#protocol Ec2TransitGatewayConnect#protocol}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ec2_transit_gateway_connect#region Ec2TransitGatewayConnect#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ec2_transit_gateway_connect#tags Ec2TransitGatewayConnect#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ec2_transit_gateway_connect#tags_all Ec2TransitGatewayConnect#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectConfig.property.timeouts"></a>

```java
public Ec2TransitGatewayConnectTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeouts">Ec2TransitGatewayConnectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ec2_transit_gateway_connect#timeouts Ec2TransitGatewayConnect#timeouts}

---

##### `transitGatewayDefaultRouteTableAssociation`<sup>Optional</sup> <a name="transitGatewayDefaultRouteTableAssociation" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectConfig.property.transitGatewayDefaultRouteTableAssociation"></a>

```java
public java.lang.Boolean|IResolvable getTransitGatewayDefaultRouteTableAssociation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ec2_transit_gateway_connect#transit_gateway_default_route_table_association Ec2TransitGatewayConnect#transit_gateway_default_route_table_association}.

---

##### `transitGatewayDefaultRouteTablePropagation`<sup>Optional</sup> <a name="transitGatewayDefaultRouteTablePropagation" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectConfig.property.transitGatewayDefaultRouteTablePropagation"></a>

```java
public java.lang.Boolean|IResolvable getTransitGatewayDefaultRouteTablePropagation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ec2_transit_gateway_connect#transit_gateway_default_route_table_propagation Ec2TransitGatewayConnect#transit_gateway_default_route_table_propagation}.

---

### Ec2TransitGatewayConnectTimeouts <a name="Ec2TransitGatewayConnectTimeouts" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.ec2_transit_gateway_connect.Ec2TransitGatewayConnectTimeouts;

Ec2TransitGatewayConnectTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ec2_transit_gateway_connect#create Ec2TransitGatewayConnect#create}. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ec2_transit_gateway_connect#delete Ec2TransitGatewayConnect#delete}. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ec2_transit_gateway_connect#update Ec2TransitGatewayConnect#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ec2_transit_gateway_connect#create Ec2TransitGatewayConnect#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ec2_transit_gateway_connect#delete Ec2TransitGatewayConnect#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ec2_transit_gateway_connect#update Ec2TransitGatewayConnect#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2TransitGatewayConnectTimeoutsOutputReference <a name="Ec2TransitGatewayConnectTimeoutsOutputReference" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.ec2_transit_gateway_connect.Ec2TransitGatewayConnectTimeoutsOutputReference;

new Ec2TransitGatewayConnectTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeouts">Ec2TransitGatewayConnectTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2TransitGatewayConnectTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeouts">Ec2TransitGatewayConnectTimeouts</a>

---




# `dataAwsEc2TransitGatewayRouteTablePropagations` Submodule <a name="`dataAwsEc2TransitGatewayRouteTablePropagations` Submodule" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEc2TransitGatewayRouteTablePropagations <a name="DataAwsEc2TransitGatewayRouteTablePropagations" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/data-sources/ec2_transit_gateway_route_table_propagations aws_ec2_transit_gateway_route_table_propagations}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_ec2_transit_gateway_route_table_propagations.DataAwsEc2TransitGatewayRouteTablePropagations;

DataAwsEc2TransitGatewayRouteTablePropagations.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .transitGatewayRouteTableId(java.lang.String)
//  .filter(IResolvable|java.util.List<DataAwsEc2TransitGatewayRouteTablePropagationsFilter>)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.Initializer.parameter.transitGatewayRouteTableId">transitGatewayRouteTableId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/data-sources/ec2_transit_gateway_route_table_propagations#transit_gateway_route_table_id DataAwsEc2TransitGatewayRouteTablePropagations#transit_gateway_route_table_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.Initializer.parameter.filter">filter</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilter">DataAwsEc2TransitGatewayRouteTablePropagationsFilter</a>></code> | filter block. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/data-sources/ec2_transit_gateway_route_table_propagations#id DataAwsEc2TransitGatewayRouteTablePropagations#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts">DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `transitGatewayRouteTableId`<sup>Required</sup> <a name="transitGatewayRouteTableId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.Initializer.parameter.transitGatewayRouteTableId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/data-sources/ec2_transit_gateway_route_table_propagations#transit_gateway_route_table_id DataAwsEc2TransitGatewayRouteTablePropagations#transit_gateway_route_table_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.Initializer.parameter.filter"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilter">DataAwsEc2TransitGatewayRouteTablePropagationsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/data-sources/ec2_transit_gateway_route_table_propagations#filter DataAwsEc2TransitGatewayRouteTablePropagations#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/data-sources/ec2_transit_gateway_route_table_propagations#id DataAwsEc2TransitGatewayRouteTablePropagations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/data-sources/ec2_transit_gateway_route_table_propagations#region DataAwsEc2TransitGatewayRouteTablePropagations#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts">DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/data-sources/ec2_transit_gateway_route_table_propagations#timeouts DataAwsEc2TransitGatewayRouteTablePropagations#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.putFilter"></a>

```java
public void putFilter(IResolvable|java.util.List<DataAwsEc2TransitGatewayRouteTablePropagationsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.putFilter.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilter">DataAwsEc2TransitGatewayRouteTablePropagationsFilter</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.putTimeouts"></a>

```java
public void putTimeouts(DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts">DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts</a>

---

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.resetId"></a>

```java
public void resetId()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsEc2TransitGatewayRouteTablePropagations resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.isConstruct"></a>

```java
import io.cdktn.providers.aws.data_aws_ec2_transit_gateway_route_table_propagations.DataAwsEc2TransitGatewayRouteTablePropagations;

DataAwsEc2TransitGatewayRouteTablePropagations.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.data_aws_ec2_transit_gateway_route_table_propagations.DataAwsEc2TransitGatewayRouteTablePropagations;

DataAwsEc2TransitGatewayRouteTablePropagations.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.isTerraformDataSource"></a>

```java
import io.cdktn.providers.aws.data_aws_ec2_transit_gateway_route_table_propagations.DataAwsEc2TransitGatewayRouteTablePropagations;

DataAwsEc2TransitGatewayRouteTablePropagations.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.data_aws_ec2_transit_gateway_route_table_propagations.DataAwsEc2TransitGatewayRouteTablePropagations;

DataAwsEc2TransitGatewayRouteTablePropagations.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsEc2TransitGatewayRouteTablePropagations.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsEc2TransitGatewayRouteTablePropagations resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsEc2TransitGatewayRouteTablePropagations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsEc2TransitGatewayRouteTablePropagations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/data-sources/ec2_transit_gateway_route_table_propagations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsEc2TransitGatewayRouteTablePropagations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList">DataAwsEc2TransitGatewayRouteTablePropagationsFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.ids">ids</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference">DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.filterInput">filterInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilter">DataAwsEc2TransitGatewayRouteTablePropagationsFilter</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts">DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.transitGatewayRouteTableIdInput">transitGatewayRouteTableIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.transitGatewayRouteTableId">transitGatewayRouteTableId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.filter"></a>

```java
public DataAwsEc2TransitGatewayRouteTablePropagationsFilterList getFilter();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList">DataAwsEc2TransitGatewayRouteTablePropagationsFilterList</a>

---

##### `ids`<sup>Required</sup> <a name="ids" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.ids"></a>

```java
public java.util.List<java.lang.String> getIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.timeouts"></a>

```java
public DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference">DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.filterInput"></a>

```java
public IResolvable|java.util.List<DataAwsEc2TransitGatewayRouteTablePropagationsFilter> getFilterInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilter">DataAwsEc2TransitGatewayRouteTablePropagationsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.timeoutsInput"></a>

```java
public IResolvable|DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts">DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts</a>

---

##### `transitGatewayRouteTableIdInput`<sup>Optional</sup> <a name="transitGatewayRouteTableIdInput" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.transitGatewayRouteTableIdInput"></a>

```java
public java.lang.String getTransitGatewayRouteTableIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `transitGatewayRouteTableId`<sup>Required</sup> <a name="transitGatewayRouteTableId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.transitGatewayRouteTableId"></a>

```java
public java.lang.String getTransitGatewayRouteTableId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagations.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEc2TransitGatewayRouteTablePropagationsConfig <a name="DataAwsEc2TransitGatewayRouteTablePropagationsConfig" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_ec2_transit_gateway_route_table_propagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig;

DataAwsEc2TransitGatewayRouteTablePropagationsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .transitGatewayRouteTableId(java.lang.String)
//  .filter(IResolvable|java.util.List<DataAwsEc2TransitGatewayRouteTablePropagationsFilter>)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.transitGatewayRouteTableId">transitGatewayRouteTableId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/data-sources/ec2_transit_gateway_route_table_propagations#transit_gateway_route_table_id DataAwsEc2TransitGatewayRouteTablePropagations#transit_gateway_route_table_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.filter">filter</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilter">DataAwsEc2TransitGatewayRouteTablePropagationsFilter</a>></code> | filter block. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/data-sources/ec2_transit_gateway_route_table_propagations#id DataAwsEc2TransitGatewayRouteTablePropagations#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts">DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `transitGatewayRouteTableId`<sup>Required</sup> <a name="transitGatewayRouteTableId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.transitGatewayRouteTableId"></a>

```java
public java.lang.String getTransitGatewayRouteTableId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/data-sources/ec2_transit_gateway_route_table_propagations#transit_gateway_route_table_id DataAwsEc2TransitGatewayRouteTablePropagations#transit_gateway_route_table_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.filter"></a>

```java
public IResolvable|java.util.List<DataAwsEc2TransitGatewayRouteTablePropagationsFilter> getFilter();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilter">DataAwsEc2TransitGatewayRouteTablePropagationsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/data-sources/ec2_transit_gateway_route_table_propagations#filter DataAwsEc2TransitGatewayRouteTablePropagations#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/data-sources/ec2_transit_gateway_route_table_propagations#id DataAwsEc2TransitGatewayRouteTablePropagations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/data-sources/ec2_transit_gateway_route_table_propagations#region DataAwsEc2TransitGatewayRouteTablePropagations#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsConfig.property.timeouts"></a>

```java
public DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts">DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/data-sources/ec2_transit_gateway_route_table_propagations#timeouts DataAwsEc2TransitGatewayRouteTablePropagations#timeouts}

---

### DataAwsEc2TransitGatewayRouteTablePropagationsFilter <a name="DataAwsEc2TransitGatewayRouteTablePropagationsFilter" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilter.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_ec2_transit_gateway_route_table_propagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilter;

DataAwsEc2TransitGatewayRouteTablePropagationsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/data-sources/ec2_transit_gateway_route_table_propagations#name DataAwsEc2TransitGatewayRouteTablePropagations#name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/data-sources/ec2_transit_gateway_route_table_propagations#values DataAwsEc2TransitGatewayRouteTablePropagations#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/data-sources/ec2_transit_gateway_route_table_propagations#name DataAwsEc2TransitGatewayRouteTablePropagations#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/data-sources/ec2_transit_gateway_route_table_propagations#values DataAwsEc2TransitGatewayRouteTablePropagations#values}.

---

### DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts <a name="DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_ec2_transit_gateway_route_table_propagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts;

DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/data-sources/ec2_transit_gateway_route_table_propagations#read DataAwsEc2TransitGatewayRouteTablePropagations#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/data-sources/ec2_transit_gateway_route_table_propagations#read DataAwsEc2TransitGatewayRouteTablePropagations#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsEc2TransitGatewayRouteTablePropagationsFilterList <a name="DataAwsEc2TransitGatewayRouteTablePropagationsFilterList" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_ec2_transit_gateway_route_table_propagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList;

new DataAwsEc2TransitGatewayRouteTablePropagationsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.get"></a>

```java
public DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilter">DataAwsEc2TransitGatewayRouteTablePropagationsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataAwsEc2TransitGatewayRouteTablePropagationsFilter> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilter">DataAwsEc2TransitGatewayRouteTablePropagationsFilter</a>>

---


### DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference <a name="DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_ec2_transit_gateway_route_table_propagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference;

new DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilter">DataAwsEc2TransitGatewayRouteTablePropagationsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference.property.internalValue"></a>

```java
public IResolvable|DataAwsEc2TransitGatewayRouteTablePropagationsFilter getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsFilter">DataAwsEc2TransitGatewayRouteTablePropagationsFilter</a>

---


### DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference <a name="DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_ec2_transit_gateway_route_table_propagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference;

new DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts">DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayRouteTablePropagations.DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts">DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts</a>

---




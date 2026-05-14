# `dataAwsVpcEndpoint` Submodule <a name="`dataAwsVpcEndpoint` Submodule" id="@cdktn/provider-aws.dataAwsVpcEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsVpcEndpoint <a name="DataAwsVpcEndpoint" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/data-sources/vpc_endpoint aws_vpc_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_vpc_endpoint.DataAwsVpcEndpoint;

DataAwsVpcEndpoint.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .filter(IResolvable|java.util.List<DataAwsVpcEndpointFilter>)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .serviceName(java.lang.String)
//  .serviceRegion(java.lang.String)
//  .state(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DataAwsVpcEndpointTimeouts)
//  .vpcEndpointType(java.lang.String)
//  .vpcId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.Initializer.parameter.filter">filter</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilter">DataAwsVpcEndpointFilter</a>></code> | filter block. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/data-sources/vpc_endpoint#id DataAwsVpcEndpoint#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.Initializer.parameter.serviceName">serviceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/data-sources/vpc_endpoint#service_name DataAwsVpcEndpoint#service_name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.Initializer.parameter.serviceRegion">serviceRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/data-sources/vpc_endpoint#service_region DataAwsVpcEndpoint#service_region}. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/data-sources/vpc_endpoint#state DataAwsVpcEndpoint#state}. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/data-sources/vpc_endpoint#tags DataAwsVpcEndpoint#tags}. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeouts">DataAwsVpcEndpointTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.Initializer.parameter.vpcEndpointType">vpcEndpointType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/data-sources/vpc_endpoint#vpc_endpoint_type DataAwsVpcEndpoint#vpc_endpoint_type}. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.Initializer.parameter.vpcId">vpcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/data-sources/vpc_endpoint#vpc_id DataAwsVpcEndpoint#vpc_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.Initializer.parameter.filter"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilter">DataAwsVpcEndpointFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/data-sources/vpc_endpoint#filter DataAwsVpcEndpoint#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/data-sources/vpc_endpoint#id DataAwsVpcEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/data-sources/vpc_endpoint#region DataAwsVpcEndpoint#region}

---

##### `serviceName`<sup>Optional</sup> <a name="serviceName" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.Initializer.parameter.serviceName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/data-sources/vpc_endpoint#service_name DataAwsVpcEndpoint#service_name}.

---

##### `serviceRegion`<sup>Optional</sup> <a name="serviceRegion" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.Initializer.parameter.serviceRegion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/data-sources/vpc_endpoint#service_region DataAwsVpcEndpoint#service_region}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/data-sources/vpc_endpoint#state DataAwsVpcEndpoint#state}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/data-sources/vpc_endpoint#tags DataAwsVpcEndpoint#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeouts">DataAwsVpcEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/data-sources/vpc_endpoint#timeouts DataAwsVpcEndpoint#timeouts}

---

##### `vpcEndpointType`<sup>Optional</sup> <a name="vpcEndpointType" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.Initializer.parameter.vpcEndpointType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/data-sources/vpc_endpoint#vpc_endpoint_type DataAwsVpcEndpoint#vpc_endpoint_type}.

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.Initializer.parameter.vpcId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/data-sources/vpc_endpoint#vpc_id DataAwsVpcEndpoint#vpc_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.resetServiceName">resetServiceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.resetServiceRegion">resetServiceRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.resetVpcEndpointType">resetVpcEndpointType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.resetVpcId">resetVpcId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.putFilter"></a>

```java
public void putFilter(IResolvable|java.util.List<DataAwsVpcEndpointFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.putFilter.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilter">DataAwsVpcEndpointFilter</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.putTimeouts"></a>

```java
public void putTimeouts(DataAwsVpcEndpointTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeouts">DataAwsVpcEndpointTimeouts</a>

---

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.resetId"></a>

```java
public void resetId()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetServiceName` <a name="resetServiceName" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.resetServiceName"></a>

```java
public void resetServiceName()
```

##### `resetServiceRegion` <a name="resetServiceRegion" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.resetServiceRegion"></a>

```java
public void resetServiceRegion()
```

##### `resetState` <a name="resetState" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.resetState"></a>

```java
public void resetState()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVpcEndpointType` <a name="resetVpcEndpointType" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.resetVpcEndpointType"></a>

```java
public void resetVpcEndpointType()
```

##### `resetVpcId` <a name="resetVpcId" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.resetVpcId"></a>

```java
public void resetVpcId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsVpcEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.isConstruct"></a>

```java
import io.cdktn.providers.aws.data_aws_vpc_endpoint.DataAwsVpcEndpoint;

DataAwsVpcEndpoint.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.data_aws_vpc_endpoint.DataAwsVpcEndpoint;

DataAwsVpcEndpoint.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.isTerraformDataSource"></a>

```java
import io.cdktn.providers.aws.data_aws_vpc_endpoint.DataAwsVpcEndpoint;

DataAwsVpcEndpoint.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.data_aws_vpc_endpoint.DataAwsVpcEndpoint;

DataAwsVpcEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsVpcEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsVpcEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsVpcEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsVpcEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/data-sources/vpc_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsVpcEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.cidrBlocks">cidrBlocks</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.dnsEntry">dnsEntry</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryList">DataAwsVpcEndpointDnsEntryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.dnsOptions">dnsOptions</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsList">DataAwsVpcEndpointDnsOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterList">DataAwsVpcEndpointFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.ipAddressType">ipAddressType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.networkInterfaceIds">networkInterfaceIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.ownerId">ownerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.policy">policy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.prefixListId">prefixListId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.privateDnsEnabled">privateDnsEnabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.requesterManaged">requesterManaged</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.routeTableIds">routeTableIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference">DataAwsVpcEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.filterInput">filterInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilter">DataAwsVpcEndpointFilter</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.serviceNameInput">serviceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.serviceRegionInput">serviceRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeouts">DataAwsVpcEndpointTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.vpcEndpointTypeInput">vpcEndpointTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.vpcIdInput">vpcIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.serviceRegion">serviceRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.vpcEndpointType">vpcEndpointType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `cidrBlocks`<sup>Required</sup> <a name="cidrBlocks" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.cidrBlocks"></a>

```java
public java.util.List<java.lang.String> getCidrBlocks();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dnsEntry`<sup>Required</sup> <a name="dnsEntry" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.dnsEntry"></a>

```java
public DataAwsVpcEndpointDnsEntryList getDnsEntry();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryList">DataAwsVpcEndpointDnsEntryList</a>

---

##### `dnsOptions`<sup>Required</sup> <a name="dnsOptions" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.dnsOptions"></a>

```java
public DataAwsVpcEndpointDnsOptionsList getDnsOptions();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsList">DataAwsVpcEndpointDnsOptionsList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.filter"></a>

```java
public DataAwsVpcEndpointFilterList getFilter();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterList">DataAwsVpcEndpointFilterList</a>

---

##### `ipAddressType`<sup>Required</sup> <a name="ipAddressType" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.ipAddressType"></a>

```java
public java.lang.String getIpAddressType();
```

- *Type:* java.lang.String

---

##### `networkInterfaceIds`<sup>Required</sup> <a name="networkInterfaceIds" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.networkInterfaceIds"></a>

```java
public java.util.List<java.lang.String> getNetworkInterfaceIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.ownerId"></a>

```java
public java.lang.String getOwnerId();
```

- *Type:* java.lang.String

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.policy"></a>

```java
public java.lang.String getPolicy();
```

- *Type:* java.lang.String

---

##### `prefixListId`<sup>Required</sup> <a name="prefixListId" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.prefixListId"></a>

```java
public java.lang.String getPrefixListId();
```

- *Type:* java.lang.String

---

##### `privateDnsEnabled`<sup>Required</sup> <a name="privateDnsEnabled" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.privateDnsEnabled"></a>

```java
public IResolvable getPrivateDnsEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `requesterManaged`<sup>Required</sup> <a name="requesterManaged" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.requesterManaged"></a>

```java
public IResolvable getRequesterManaged();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `routeTableIds`<sup>Required</sup> <a name="routeTableIds" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.routeTableIds"></a>

```java
public java.util.List<java.lang.String> getRouteTableIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.timeouts"></a>

```java
public DataAwsVpcEndpointTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference">DataAwsVpcEndpointTimeoutsOutputReference</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.filterInput"></a>

```java
public IResolvable|java.util.List<DataAwsVpcEndpointFilter> getFilterInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilter">DataAwsVpcEndpointFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.serviceNameInput"></a>

```java
public java.lang.String getServiceNameInput();
```

- *Type:* java.lang.String

---

##### `serviceRegionInput`<sup>Optional</sup> <a name="serviceRegionInput" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.serviceRegionInput"></a>

```java
public java.lang.String getServiceRegionInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.timeoutsInput"></a>

```java
public IResolvable|DataAwsVpcEndpointTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeouts">DataAwsVpcEndpointTimeouts</a>

---

##### `vpcEndpointTypeInput`<sup>Optional</sup> <a name="vpcEndpointTypeInput" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.vpcEndpointTypeInput"></a>

```java
public java.lang.String getVpcEndpointTypeInput();
```

- *Type:* java.lang.String

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.vpcIdInput"></a>

```java
public java.lang.String getVpcIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

---

##### `serviceRegion`<sup>Required</sup> <a name="serviceRegion" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.serviceRegion"></a>

```java
public java.lang.String getServiceRegion();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `vpcEndpointType`<sup>Required</sup> <a name="vpcEndpointType" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.vpcEndpointType"></a>

```java
public java.lang.String getVpcEndpointType();
```

- *Type:* java.lang.String

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsVpcEndpointConfig <a name="DataAwsVpcEndpointConfig" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_vpc_endpoint.DataAwsVpcEndpointConfig;

DataAwsVpcEndpointConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .filter(IResolvable|java.util.List<DataAwsVpcEndpointFilter>)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .serviceName(java.lang.String)
//  .serviceRegion(java.lang.String)
//  .state(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DataAwsVpcEndpointTimeouts)
//  .vpcEndpointType(java.lang.String)
//  .vpcId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointConfig.property.filter">filter</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilter">DataAwsVpcEndpointFilter</a>></code> | filter block. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/data-sources/vpc_endpoint#id DataAwsVpcEndpoint#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointConfig.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/data-sources/vpc_endpoint#service_name DataAwsVpcEndpoint#service_name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointConfig.property.serviceRegion">serviceRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/data-sources/vpc_endpoint#service_region DataAwsVpcEndpoint#service_region}. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/data-sources/vpc_endpoint#state DataAwsVpcEndpoint#state}. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/data-sources/vpc_endpoint#tags DataAwsVpcEndpoint#tags}. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeouts">DataAwsVpcEndpointTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointConfig.property.vpcEndpointType">vpcEndpointType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/data-sources/vpc_endpoint#vpc_endpoint_type DataAwsVpcEndpoint#vpc_endpoint_type}. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointConfig.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/data-sources/vpc_endpoint#vpc_id DataAwsVpcEndpoint#vpc_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointConfig.property.filter"></a>

```java
public IResolvable|java.util.List<DataAwsVpcEndpointFilter> getFilter();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilter">DataAwsVpcEndpointFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/data-sources/vpc_endpoint#filter DataAwsVpcEndpoint#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/data-sources/vpc_endpoint#id DataAwsVpcEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/data-sources/vpc_endpoint#region DataAwsVpcEndpoint#region}

---

##### `serviceName`<sup>Optional</sup> <a name="serviceName" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointConfig.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/data-sources/vpc_endpoint#service_name DataAwsVpcEndpoint#service_name}.

---

##### `serviceRegion`<sup>Optional</sup> <a name="serviceRegion" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointConfig.property.serviceRegion"></a>

```java
public java.lang.String getServiceRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/data-sources/vpc_endpoint#service_region DataAwsVpcEndpoint#service_region}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/data-sources/vpc_endpoint#state DataAwsVpcEndpoint#state}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/data-sources/vpc_endpoint#tags DataAwsVpcEndpoint#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointConfig.property.timeouts"></a>

```java
public DataAwsVpcEndpointTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeouts">DataAwsVpcEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/data-sources/vpc_endpoint#timeouts DataAwsVpcEndpoint#timeouts}

---

##### `vpcEndpointType`<sup>Optional</sup> <a name="vpcEndpointType" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointConfig.property.vpcEndpointType"></a>

```java
public java.lang.String getVpcEndpointType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/data-sources/vpc_endpoint#vpc_endpoint_type DataAwsVpcEndpoint#vpc_endpoint_type}.

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointConfig.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/data-sources/vpc_endpoint#vpc_id DataAwsVpcEndpoint#vpc_id}.

---

### DataAwsVpcEndpointDnsEntry <a name="DataAwsVpcEndpointDnsEntry" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntry"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntry.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_vpc_endpoint.DataAwsVpcEndpointDnsEntry;

DataAwsVpcEndpointDnsEntry.builder()
    .build();
```


### DataAwsVpcEndpointDnsOptions <a name="DataAwsVpcEndpointDnsOptions" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptions.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_vpc_endpoint.DataAwsVpcEndpointDnsOptions;

DataAwsVpcEndpointDnsOptions.builder()
    .build();
```


### DataAwsVpcEndpointFilter <a name="DataAwsVpcEndpointFilter" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilter.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_vpc_endpoint.DataAwsVpcEndpointFilter;

DataAwsVpcEndpointFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/data-sources/vpc_endpoint#name DataAwsVpcEndpoint#name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/data-sources/vpc_endpoint#values DataAwsVpcEndpoint#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/data-sources/vpc_endpoint#name DataAwsVpcEndpoint#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/data-sources/vpc_endpoint#values DataAwsVpcEndpoint#values}.

---

### DataAwsVpcEndpointTimeouts <a name="DataAwsVpcEndpointTimeouts" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_vpc_endpoint.DataAwsVpcEndpointTimeouts;

DataAwsVpcEndpointTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/data-sources/vpc_endpoint#read DataAwsVpcEndpoint#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/data-sources/vpc_endpoint#read DataAwsVpcEndpoint#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsVpcEndpointDnsEntryList <a name="DataAwsVpcEndpointDnsEntryList" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_vpc_endpoint.DataAwsVpcEndpointDnsEntryList;

new DataAwsVpcEndpointDnsEntryList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryList.get"></a>

```java
public DataAwsVpcEndpointDnsEntryOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsVpcEndpointDnsEntryOutputReference <a name="DataAwsVpcEndpointDnsEntryOutputReference" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_vpc_endpoint.DataAwsVpcEndpointDnsEntryOutputReference;

new DataAwsVpcEndpointDnsEntryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.property.dnsName">dnsName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.property.hostedZoneId">hostedZoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntry">DataAwsVpcEndpointDnsEntry</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.property.dnsName"></a>

```java
public java.lang.String getDnsName();
```

- *Type:* java.lang.String

---

##### `hostedZoneId`<sup>Required</sup> <a name="hostedZoneId" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.property.hostedZoneId"></a>

```java
public java.lang.String getHostedZoneId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.property.internalValue"></a>

```java
public DataAwsVpcEndpointDnsEntry getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntry">DataAwsVpcEndpointDnsEntry</a>

---


### DataAwsVpcEndpointDnsOptionsList <a name="DataAwsVpcEndpointDnsOptionsList" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_vpc_endpoint.DataAwsVpcEndpointDnsOptionsList;

new DataAwsVpcEndpointDnsOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsList.get"></a>

```java
public DataAwsVpcEndpointDnsOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsVpcEndpointDnsOptionsOutputReference <a name="DataAwsVpcEndpointDnsOptionsOutputReference" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_vpc_endpoint.DataAwsVpcEndpointDnsOptionsOutputReference;

new DataAwsVpcEndpointDnsOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.property.dnsRecordIpType">dnsRecordIpType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.property.privateDnsOnlyForInboundResolverEndpoint">privateDnsOnlyForInboundResolverEndpoint</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.property.privateDnsPreference">privateDnsPreference</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.property.privateDnsSpecifiedDomains">privateDnsSpecifiedDomains</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptions">DataAwsVpcEndpointDnsOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dnsRecordIpType`<sup>Required</sup> <a name="dnsRecordIpType" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.property.dnsRecordIpType"></a>

```java
public java.lang.String getDnsRecordIpType();
```

- *Type:* java.lang.String

---

##### `privateDnsOnlyForInboundResolverEndpoint`<sup>Required</sup> <a name="privateDnsOnlyForInboundResolverEndpoint" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.property.privateDnsOnlyForInboundResolverEndpoint"></a>

```java
public IResolvable getPrivateDnsOnlyForInboundResolverEndpoint();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `privateDnsPreference`<sup>Required</sup> <a name="privateDnsPreference" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.property.privateDnsPreference"></a>

```java
public java.lang.String getPrivateDnsPreference();
```

- *Type:* java.lang.String

---

##### `privateDnsSpecifiedDomains`<sup>Required</sup> <a name="privateDnsSpecifiedDomains" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.property.privateDnsSpecifiedDomains"></a>

```java
public java.util.List<java.lang.String> getPrivateDnsSpecifiedDomains();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.property.internalValue"></a>

```java
public DataAwsVpcEndpointDnsOptions getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptions">DataAwsVpcEndpointDnsOptions</a>

---


### DataAwsVpcEndpointFilterList <a name="DataAwsVpcEndpointFilterList" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_vpc_endpoint.DataAwsVpcEndpointFilterList;

new DataAwsVpcEndpointFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterList.get"></a>

```java
public DataAwsVpcEndpointFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilter">DataAwsVpcEndpointFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataAwsVpcEndpointFilter> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilter">DataAwsVpcEndpointFilter</a>>

---


### DataAwsVpcEndpointFilterOutputReference <a name="DataAwsVpcEndpointFilterOutputReference" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_vpc_endpoint.DataAwsVpcEndpointFilterOutputReference;

new DataAwsVpcEndpointFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilter">DataAwsVpcEndpointFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.property.internalValue"></a>

```java
public IResolvable|DataAwsVpcEndpointFilter getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilter">DataAwsVpcEndpointFilter</a>

---


### DataAwsVpcEndpointTimeoutsOutputReference <a name="DataAwsVpcEndpointTimeoutsOutputReference" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_vpc_endpoint.DataAwsVpcEndpointTimeoutsOutputReference;

new DataAwsVpcEndpointTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeouts">DataAwsVpcEndpointTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataAwsVpcEndpointTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeouts">DataAwsVpcEndpointTimeouts</a>

---




# `dataAwsVpcEndpointService` Submodule <a name="`dataAwsVpcEndpointService` Submodule" id="@cdktn/provider-aws.dataAwsVpcEndpointService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsVpcEndpointService <a name="DataAwsVpcEndpointService" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/vpc_endpoint_service aws_vpc_endpoint_service}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_vpc_endpoint_service.DataAwsVpcEndpointService;

DataAwsVpcEndpointService.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .filter(IResolvable|java.util.List<DataAwsVpcEndpointServiceFilter>)
//  .id(java.lang.String)
//  .service(java.lang.String)
//  .serviceName(java.lang.String)
//  .serviceRegions(java.util.List<java.lang.String>)
//  .serviceType(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DataAwsVpcEndpointServiceTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.Initializer.parameter.filter">filter</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilter">DataAwsVpcEndpointServiceFilter</a>></code> | filter block. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/vpc_endpoint_service#id DataAwsVpcEndpointService#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.Initializer.parameter.service">service</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/vpc_endpoint_service#service DataAwsVpcEndpointService#service}. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.Initializer.parameter.serviceName">serviceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/vpc_endpoint_service#service_name DataAwsVpcEndpointService#service_name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.Initializer.parameter.serviceRegions">serviceRegions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/vpc_endpoint_service#service_regions DataAwsVpcEndpointService#service_regions}. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.Initializer.parameter.serviceType">serviceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/vpc_endpoint_service#service_type DataAwsVpcEndpointService#service_type}. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/vpc_endpoint_service#tags DataAwsVpcEndpointService#tags}. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeouts">DataAwsVpcEndpointServiceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.Initializer.parameter.filter"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilter">DataAwsVpcEndpointServiceFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/vpc_endpoint_service#filter DataAwsVpcEndpointService#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/vpc_endpoint_service#id DataAwsVpcEndpointService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.Initializer.parameter.service"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/vpc_endpoint_service#service DataAwsVpcEndpointService#service}.

---

##### `serviceName`<sup>Optional</sup> <a name="serviceName" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.Initializer.parameter.serviceName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/vpc_endpoint_service#service_name DataAwsVpcEndpointService#service_name}.

---

##### `serviceRegions`<sup>Optional</sup> <a name="serviceRegions" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.Initializer.parameter.serviceRegions"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/vpc_endpoint_service#service_regions DataAwsVpcEndpointService#service_regions}.

---

##### `serviceType`<sup>Optional</sup> <a name="serviceType" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.Initializer.parameter.serviceType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/vpc_endpoint_service#service_type DataAwsVpcEndpointService#service_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/vpc_endpoint_service#tags DataAwsVpcEndpointService#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeouts">DataAwsVpcEndpointServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/vpc_endpoint_service#timeouts DataAwsVpcEndpointService#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.resetService">resetService</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.resetServiceName">resetServiceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.resetServiceRegions">resetServiceRegions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.resetServiceType">resetServiceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.putFilter"></a>

```java
public void putFilter(IResolvable|java.util.List<DataAwsVpcEndpointServiceFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.putFilter.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilter">DataAwsVpcEndpointServiceFilter</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.putTimeouts"></a>

```java
public void putTimeouts(DataAwsVpcEndpointServiceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeouts">DataAwsVpcEndpointServiceTimeouts</a>

---

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.resetId"></a>

```java
public void resetId()
```

##### `resetService` <a name="resetService" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.resetService"></a>

```java
public void resetService()
```

##### `resetServiceName` <a name="resetServiceName" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.resetServiceName"></a>

```java
public void resetServiceName()
```

##### `resetServiceRegions` <a name="resetServiceRegions" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.resetServiceRegions"></a>

```java
public void resetServiceRegions()
```

##### `resetServiceType` <a name="resetServiceType" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.resetServiceType"></a>

```java
public void resetServiceType()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsVpcEndpointService resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.isConstruct"></a>

```java
import io.cdktn.providers.aws.data_aws_vpc_endpoint_service.DataAwsVpcEndpointService;

DataAwsVpcEndpointService.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.data_aws_vpc_endpoint_service.DataAwsVpcEndpointService;

DataAwsVpcEndpointService.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.isTerraformDataSource"></a>

```java
import io.cdktn.providers.aws.data_aws_vpc_endpoint_service.DataAwsVpcEndpointService;

DataAwsVpcEndpointService.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.data_aws_vpc_endpoint_service.DataAwsVpcEndpointService;

DataAwsVpcEndpointService.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsVpcEndpointService.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsVpcEndpointService resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsVpcEndpointService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsVpcEndpointService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/vpc_endpoint_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsVpcEndpointService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.acceptanceRequired">acceptanceRequired</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.availabilityZones">availabilityZones</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.baseEndpointDnsNames">baseEndpointDnsNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterList">DataAwsVpcEndpointServiceFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.managesVpcEndpoints">managesVpcEndpoints</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.privateDnsName">privateDnsName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.privateDnsNames">privateDnsNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.serviceId">serviceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.serviceRegion">serviceRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.supportedIpAddressTypes">supportedIpAddressTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference">DataAwsVpcEndpointServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.vpcEndpointPolicySupported">vpcEndpointPolicySupported</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.filterInput">filterInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilter">DataAwsVpcEndpointServiceFilter</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.serviceInput">serviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.serviceNameInput">serviceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.serviceRegionsInput">serviceRegionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.serviceTypeInput">serviceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeouts">DataAwsVpcEndpointServiceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.serviceRegions">serviceRegions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.serviceType">serviceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `acceptanceRequired`<sup>Required</sup> <a name="acceptanceRequired" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.acceptanceRequired"></a>

```java
public IResolvable getAcceptanceRequired();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.availabilityZones"></a>

```java
public java.util.List<java.lang.String> getAvailabilityZones();
```

- *Type:* java.util.List<java.lang.String>

---

##### `baseEndpointDnsNames`<sup>Required</sup> <a name="baseEndpointDnsNames" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.baseEndpointDnsNames"></a>

```java
public java.util.List<java.lang.String> getBaseEndpointDnsNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.filter"></a>

```java
public DataAwsVpcEndpointServiceFilterList getFilter();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterList">DataAwsVpcEndpointServiceFilterList</a>

---

##### `managesVpcEndpoints`<sup>Required</sup> <a name="managesVpcEndpoints" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.managesVpcEndpoints"></a>

```java
public IResolvable getManagesVpcEndpoints();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `privateDnsName`<sup>Required</sup> <a name="privateDnsName" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.privateDnsName"></a>

```java
public java.lang.String getPrivateDnsName();
```

- *Type:* java.lang.String

---

##### `privateDnsNames`<sup>Required</sup> <a name="privateDnsNames" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.privateDnsNames"></a>

```java
public java.util.List<java.lang.String> getPrivateDnsNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.serviceId"></a>

```java
public java.lang.String getServiceId();
```

- *Type:* java.lang.String

---

##### `serviceRegion`<sup>Required</sup> <a name="serviceRegion" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.serviceRegion"></a>

```java
public java.lang.String getServiceRegion();
```

- *Type:* java.lang.String

---

##### `supportedIpAddressTypes`<sup>Required</sup> <a name="supportedIpAddressTypes" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.supportedIpAddressTypes"></a>

```java
public java.util.List<java.lang.String> getSupportedIpAddressTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.timeouts"></a>

```java
public DataAwsVpcEndpointServiceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference">DataAwsVpcEndpointServiceTimeoutsOutputReference</a>

---

##### `vpcEndpointPolicySupported`<sup>Required</sup> <a name="vpcEndpointPolicySupported" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.vpcEndpointPolicySupported"></a>

```java
public IResolvable getVpcEndpointPolicySupported();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.filterInput"></a>

```java
public IResolvable|java.util.List<DataAwsVpcEndpointServiceFilter> getFilterInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilter">DataAwsVpcEndpointServiceFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.serviceInput"></a>

```java
public java.lang.String getServiceInput();
```

- *Type:* java.lang.String

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.serviceNameInput"></a>

```java
public java.lang.String getServiceNameInput();
```

- *Type:* java.lang.String

---

##### `serviceRegionsInput`<sup>Optional</sup> <a name="serviceRegionsInput" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.serviceRegionsInput"></a>

```java
public java.util.List<java.lang.String> getServiceRegionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serviceTypeInput`<sup>Optional</sup> <a name="serviceTypeInput" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.serviceTypeInput"></a>

```java
public java.lang.String getServiceTypeInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.timeoutsInput"></a>

```java
public IResolvable|DataAwsVpcEndpointServiceTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeouts">DataAwsVpcEndpointServiceTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

---

##### `serviceRegions`<sup>Required</sup> <a name="serviceRegions" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.serviceRegions"></a>

```java
public java.util.List<java.lang.String> getServiceRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serviceType`<sup>Required</sup> <a name="serviceType" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.serviceType"></a>

```java
public java.lang.String getServiceType();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointService.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsVpcEndpointServiceConfig <a name="DataAwsVpcEndpointServiceConfig" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_vpc_endpoint_service.DataAwsVpcEndpointServiceConfig;

DataAwsVpcEndpointServiceConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .filter(IResolvable|java.util.List<DataAwsVpcEndpointServiceFilter>)
//  .id(java.lang.String)
//  .service(java.lang.String)
//  .serviceName(java.lang.String)
//  .serviceRegions(java.util.List<java.lang.String>)
//  .serviceType(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DataAwsVpcEndpointServiceTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.property.filter">filter</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilter">DataAwsVpcEndpointServiceFilter</a>></code> | filter block. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/vpc_endpoint_service#id DataAwsVpcEndpointService#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.property.service">service</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/vpc_endpoint_service#service DataAwsVpcEndpointService#service}. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/vpc_endpoint_service#service_name DataAwsVpcEndpointService#service_name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.property.serviceRegions">serviceRegions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/vpc_endpoint_service#service_regions DataAwsVpcEndpointService#service_regions}. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.property.serviceType">serviceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/vpc_endpoint_service#service_type DataAwsVpcEndpointService#service_type}. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/vpc_endpoint_service#tags DataAwsVpcEndpointService#tags}. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeouts">DataAwsVpcEndpointServiceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.property.filter"></a>

```java
public IResolvable|java.util.List<DataAwsVpcEndpointServiceFilter> getFilter();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilter">DataAwsVpcEndpointServiceFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/vpc_endpoint_service#filter DataAwsVpcEndpointService#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/vpc_endpoint_service#id DataAwsVpcEndpointService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/vpc_endpoint_service#service DataAwsVpcEndpointService#service}.

---

##### `serviceName`<sup>Optional</sup> <a name="serviceName" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/vpc_endpoint_service#service_name DataAwsVpcEndpointService#service_name}.

---

##### `serviceRegions`<sup>Optional</sup> <a name="serviceRegions" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.property.serviceRegions"></a>

```java
public java.util.List<java.lang.String> getServiceRegions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/vpc_endpoint_service#service_regions DataAwsVpcEndpointService#service_regions}.

---

##### `serviceType`<sup>Optional</sup> <a name="serviceType" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.property.serviceType"></a>

```java
public java.lang.String getServiceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/vpc_endpoint_service#service_type DataAwsVpcEndpointService#service_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/vpc_endpoint_service#tags DataAwsVpcEndpointService#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceConfig.property.timeouts"></a>

```java
public DataAwsVpcEndpointServiceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeouts">DataAwsVpcEndpointServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/vpc_endpoint_service#timeouts DataAwsVpcEndpointService#timeouts}

---

### DataAwsVpcEndpointServiceFilter <a name="DataAwsVpcEndpointServiceFilter" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilter.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_vpc_endpoint_service.DataAwsVpcEndpointServiceFilter;

DataAwsVpcEndpointServiceFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/vpc_endpoint_service#name DataAwsVpcEndpointService#name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/vpc_endpoint_service#values DataAwsVpcEndpointService#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/vpc_endpoint_service#name DataAwsVpcEndpointService#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/vpc_endpoint_service#values DataAwsVpcEndpointService#values}.

---

### DataAwsVpcEndpointServiceTimeouts <a name="DataAwsVpcEndpointServiceTimeouts" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_vpc_endpoint_service.DataAwsVpcEndpointServiceTimeouts;

DataAwsVpcEndpointServiceTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/vpc_endpoint_service#read DataAwsVpcEndpointService#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/vpc_endpoint_service#read DataAwsVpcEndpointService#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsVpcEndpointServiceFilterList <a name="DataAwsVpcEndpointServiceFilterList" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_vpc_endpoint_service.DataAwsVpcEndpointServiceFilterList;

new DataAwsVpcEndpointServiceFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterList.get"></a>

```java
public DataAwsVpcEndpointServiceFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilter">DataAwsVpcEndpointServiceFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataAwsVpcEndpointServiceFilter> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilter">DataAwsVpcEndpointServiceFilter</a>>

---


### DataAwsVpcEndpointServiceFilterOutputReference <a name="DataAwsVpcEndpointServiceFilterOutputReference" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_vpc_endpoint_service.DataAwsVpcEndpointServiceFilterOutputReference;

new DataAwsVpcEndpointServiceFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilter">DataAwsVpcEndpointServiceFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilterOutputReference.property.internalValue"></a>

```java
public IResolvable|DataAwsVpcEndpointServiceFilter getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceFilter">DataAwsVpcEndpointServiceFilter</a>

---


### DataAwsVpcEndpointServiceTimeoutsOutputReference <a name="DataAwsVpcEndpointServiceTimeoutsOutputReference" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_vpc_endpoint_service.DataAwsVpcEndpointServiceTimeoutsOutputReference;

new DataAwsVpcEndpointServiceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeouts">DataAwsVpcEndpointServiceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataAwsVpcEndpointServiceTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsVpcEndpointService.DataAwsVpcEndpointServiceTimeouts">DataAwsVpcEndpointServiceTimeouts</a>

---




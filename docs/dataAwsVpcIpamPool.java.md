# `dataAwsVpcIpamPool` Submodule <a name="`dataAwsVpcIpamPool` Submodule" id="@cdktn/provider-aws.dataAwsVpcIpamPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsVpcIpamPool <a name="DataAwsVpcIpamPool" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/data-sources/vpc_ipam_pool aws_vpc_ipam_pool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_vpc_ipam_pool.DataAwsVpcIpamPool;

DataAwsVpcIpamPool.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .allocationResourceTags(java.util.Map<java.lang.String, java.lang.String>)
//  .filter(IResolvable|java.util.List<DataAwsVpcIpamPoolFilter>)
//  .id(java.lang.String)
//  .ipamPoolId(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DataAwsVpcIpamPoolTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.Initializer.parameter.allocationResourceTags">allocationResourceTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/data-sources/vpc_ipam_pool#allocation_resource_tags DataAwsVpcIpamPool#allocation_resource_tags}. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.Initializer.parameter.filter">filter</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilter">DataAwsVpcIpamPoolFilter</a>></code> | filter block. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/data-sources/vpc_ipam_pool#id DataAwsVpcIpamPool#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.Initializer.parameter.ipamPoolId">ipamPoolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/data-sources/vpc_ipam_pool#ipam_pool_id DataAwsVpcIpamPool#ipam_pool_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/data-sources/vpc_ipam_pool#tags DataAwsVpcIpamPool#tags}. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeouts">DataAwsVpcIpamPoolTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `allocationResourceTags`<sup>Optional</sup> <a name="allocationResourceTags" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.Initializer.parameter.allocationResourceTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/data-sources/vpc_ipam_pool#allocation_resource_tags DataAwsVpcIpamPool#allocation_resource_tags}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.Initializer.parameter.filter"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilter">DataAwsVpcIpamPoolFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/data-sources/vpc_ipam_pool#filter DataAwsVpcIpamPool#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/data-sources/vpc_ipam_pool#id DataAwsVpcIpamPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipamPoolId`<sup>Optional</sup> <a name="ipamPoolId" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.Initializer.parameter.ipamPoolId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/data-sources/vpc_ipam_pool#ipam_pool_id DataAwsVpcIpamPool#ipam_pool_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/data-sources/vpc_ipam_pool#region DataAwsVpcIpamPool#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/data-sources/vpc_ipam_pool#tags DataAwsVpcIpamPool#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeouts">DataAwsVpcIpamPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/data-sources/vpc_ipam_pool#timeouts DataAwsVpcIpamPool#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.resetAllocationResourceTags">resetAllocationResourceTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.resetIpamPoolId">resetIpamPoolId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.putFilter"></a>

```java
public void putFilter(IResolvable|java.util.List<DataAwsVpcIpamPoolFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.putFilter.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilter">DataAwsVpcIpamPoolFilter</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.putTimeouts"></a>

```java
public void putTimeouts(DataAwsVpcIpamPoolTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeouts">DataAwsVpcIpamPoolTimeouts</a>

---

##### `resetAllocationResourceTags` <a name="resetAllocationResourceTags" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.resetAllocationResourceTags"></a>

```java
public void resetAllocationResourceTags()
```

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.resetId"></a>

```java
public void resetId()
```

##### `resetIpamPoolId` <a name="resetIpamPoolId" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.resetIpamPoolId"></a>

```java
public void resetIpamPoolId()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsVpcIpamPool resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.isConstruct"></a>

```java
import io.cdktn.providers.aws.data_aws_vpc_ipam_pool.DataAwsVpcIpamPool;

DataAwsVpcIpamPool.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.data_aws_vpc_ipam_pool.DataAwsVpcIpamPool;

DataAwsVpcIpamPool.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.isTerraformDataSource"></a>

```java
import io.cdktn.providers.aws.data_aws_vpc_ipam_pool.DataAwsVpcIpamPool;

DataAwsVpcIpamPool.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.data_aws_vpc_ipam_pool.DataAwsVpcIpamPool;

DataAwsVpcIpamPool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsVpcIpamPool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsVpcIpamPool resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsVpcIpamPool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsVpcIpamPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/data-sources/vpc_ipam_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsVpcIpamPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.addressFamily">addressFamily</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.allocationDefaultNetmaskLength">allocationDefaultNetmaskLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.allocationMaxNetmaskLength">allocationMaxNetmaskLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.allocationMinNetmaskLength">allocationMinNetmaskLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.autoImport">autoImport</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.awsService">awsService</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterList">DataAwsVpcIpamPoolFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.ipamScopeId">ipamScopeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.ipamScopeType">ipamScopeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.locale">locale</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.poolDepth">poolDepth</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.publiclyAdvertisable">publiclyAdvertisable</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.sourceIpamPoolId">sourceIpamPoolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.sourceResource">sourceResource</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceList">DataAwsVpcIpamPoolSourceResourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference">DataAwsVpcIpamPoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.allocationResourceTagsInput">allocationResourceTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.filterInput">filterInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilter">DataAwsVpcIpamPoolFilter</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.ipamPoolIdInput">ipamPoolIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeouts">DataAwsVpcIpamPoolTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.allocationResourceTags">allocationResourceTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.ipamPoolId">ipamPoolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `addressFamily`<sup>Required</sup> <a name="addressFamily" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.addressFamily"></a>

```java
public java.lang.String getAddressFamily();
```

- *Type:* java.lang.String

---

##### `allocationDefaultNetmaskLength`<sup>Required</sup> <a name="allocationDefaultNetmaskLength" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.allocationDefaultNetmaskLength"></a>

```java
public java.lang.Number getAllocationDefaultNetmaskLength();
```

- *Type:* java.lang.Number

---

##### `allocationMaxNetmaskLength`<sup>Required</sup> <a name="allocationMaxNetmaskLength" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.allocationMaxNetmaskLength"></a>

```java
public java.lang.Number getAllocationMaxNetmaskLength();
```

- *Type:* java.lang.Number

---

##### `allocationMinNetmaskLength`<sup>Required</sup> <a name="allocationMinNetmaskLength" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.allocationMinNetmaskLength"></a>

```java
public java.lang.Number getAllocationMinNetmaskLength();
```

- *Type:* java.lang.Number

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `autoImport`<sup>Required</sup> <a name="autoImport" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.autoImport"></a>

```java
public IResolvable getAutoImport();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `awsService`<sup>Required</sup> <a name="awsService" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.awsService"></a>

```java
public java.lang.String getAwsService();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.filter"></a>

```java
public DataAwsVpcIpamPoolFilterList getFilter();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterList">DataAwsVpcIpamPoolFilterList</a>

---

##### `ipamScopeId`<sup>Required</sup> <a name="ipamScopeId" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.ipamScopeId"></a>

```java
public java.lang.String getIpamScopeId();
```

- *Type:* java.lang.String

---

##### `ipamScopeType`<sup>Required</sup> <a name="ipamScopeType" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.ipamScopeType"></a>

```java
public java.lang.String getIpamScopeType();
```

- *Type:* java.lang.String

---

##### `locale`<sup>Required</sup> <a name="locale" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.locale"></a>

```java
public java.lang.String getLocale();
```

- *Type:* java.lang.String

---

##### `poolDepth`<sup>Required</sup> <a name="poolDepth" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.poolDepth"></a>

```java
public java.lang.Number getPoolDepth();
```

- *Type:* java.lang.Number

---

##### `publiclyAdvertisable`<sup>Required</sup> <a name="publiclyAdvertisable" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.publiclyAdvertisable"></a>

```java
public IResolvable getPubliclyAdvertisable();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `sourceIpamPoolId`<sup>Required</sup> <a name="sourceIpamPoolId" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.sourceIpamPoolId"></a>

```java
public java.lang.String getSourceIpamPoolId();
```

- *Type:* java.lang.String

---

##### `sourceResource`<sup>Required</sup> <a name="sourceResource" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.sourceResource"></a>

```java
public DataAwsVpcIpamPoolSourceResourceList getSourceResource();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceList">DataAwsVpcIpamPoolSourceResourceList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.timeouts"></a>

```java
public DataAwsVpcIpamPoolTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference">DataAwsVpcIpamPoolTimeoutsOutputReference</a>

---

##### `allocationResourceTagsInput`<sup>Optional</sup> <a name="allocationResourceTagsInput" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.allocationResourceTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAllocationResourceTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.filterInput"></a>

```java
public IResolvable|java.util.List<DataAwsVpcIpamPoolFilter> getFilterInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilter">DataAwsVpcIpamPoolFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ipamPoolIdInput`<sup>Optional</sup> <a name="ipamPoolIdInput" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.ipamPoolIdInput"></a>

```java
public java.lang.String getIpamPoolIdInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.timeoutsInput"></a>

```java
public IResolvable|DataAwsVpcIpamPoolTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeouts">DataAwsVpcIpamPoolTimeouts</a>

---

##### `allocationResourceTags`<sup>Required</sup> <a name="allocationResourceTags" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.allocationResourceTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAllocationResourceTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ipamPoolId`<sup>Required</sup> <a name="ipamPoolId" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.ipamPoolId"></a>

```java
public java.lang.String getIpamPoolId();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsVpcIpamPoolConfig <a name="DataAwsVpcIpamPoolConfig" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_vpc_ipam_pool.DataAwsVpcIpamPoolConfig;

DataAwsVpcIpamPoolConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .allocationResourceTags(java.util.Map<java.lang.String, java.lang.String>)
//  .filter(IResolvable|java.util.List<DataAwsVpcIpamPoolFilter>)
//  .id(java.lang.String)
//  .ipamPoolId(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DataAwsVpcIpamPoolTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolConfig.property.allocationResourceTags">allocationResourceTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/data-sources/vpc_ipam_pool#allocation_resource_tags DataAwsVpcIpamPool#allocation_resource_tags}. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolConfig.property.filter">filter</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilter">DataAwsVpcIpamPoolFilter</a>></code> | filter block. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/data-sources/vpc_ipam_pool#id DataAwsVpcIpamPool#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolConfig.property.ipamPoolId">ipamPoolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/data-sources/vpc_ipam_pool#ipam_pool_id DataAwsVpcIpamPool#ipam_pool_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/data-sources/vpc_ipam_pool#tags DataAwsVpcIpamPool#tags}. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeouts">DataAwsVpcIpamPoolTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `allocationResourceTags`<sup>Optional</sup> <a name="allocationResourceTags" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolConfig.property.allocationResourceTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAllocationResourceTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/data-sources/vpc_ipam_pool#allocation_resource_tags DataAwsVpcIpamPool#allocation_resource_tags}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolConfig.property.filter"></a>

```java
public IResolvable|java.util.List<DataAwsVpcIpamPoolFilter> getFilter();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilter">DataAwsVpcIpamPoolFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/data-sources/vpc_ipam_pool#filter DataAwsVpcIpamPool#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/data-sources/vpc_ipam_pool#id DataAwsVpcIpamPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipamPoolId`<sup>Optional</sup> <a name="ipamPoolId" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolConfig.property.ipamPoolId"></a>

```java
public java.lang.String getIpamPoolId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/data-sources/vpc_ipam_pool#ipam_pool_id DataAwsVpcIpamPool#ipam_pool_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/data-sources/vpc_ipam_pool#region DataAwsVpcIpamPool#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/data-sources/vpc_ipam_pool#tags DataAwsVpcIpamPool#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolConfig.property.timeouts"></a>

```java
public DataAwsVpcIpamPoolTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeouts">DataAwsVpcIpamPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/data-sources/vpc_ipam_pool#timeouts DataAwsVpcIpamPool#timeouts}

---

### DataAwsVpcIpamPoolFilter <a name="DataAwsVpcIpamPoolFilter" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilter.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_vpc_ipam_pool.DataAwsVpcIpamPoolFilter;

DataAwsVpcIpamPoolFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/data-sources/vpc_ipam_pool#name DataAwsVpcIpamPool#name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/data-sources/vpc_ipam_pool#values DataAwsVpcIpamPool#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/data-sources/vpc_ipam_pool#name DataAwsVpcIpamPool#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/data-sources/vpc_ipam_pool#values DataAwsVpcIpamPool#values}.

---

### DataAwsVpcIpamPoolSourceResource <a name="DataAwsVpcIpamPoolSourceResource" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResource.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_vpc_ipam_pool.DataAwsVpcIpamPoolSourceResource;

DataAwsVpcIpamPoolSourceResource.builder()
    .build();
```


### DataAwsVpcIpamPoolTimeouts <a name="DataAwsVpcIpamPoolTimeouts" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_vpc_ipam_pool.DataAwsVpcIpamPoolTimeouts;

DataAwsVpcIpamPoolTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/data-sources/vpc_ipam_pool#read DataAwsVpcIpamPool#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/data-sources/vpc_ipam_pool#read DataAwsVpcIpamPool#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsVpcIpamPoolFilterList <a name="DataAwsVpcIpamPoolFilterList" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_vpc_ipam_pool.DataAwsVpcIpamPoolFilterList;

new DataAwsVpcIpamPoolFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterList.get"></a>

```java
public DataAwsVpcIpamPoolFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilter">DataAwsVpcIpamPoolFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataAwsVpcIpamPoolFilter> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilter">DataAwsVpcIpamPoolFilter</a>>

---


### DataAwsVpcIpamPoolFilterOutputReference <a name="DataAwsVpcIpamPoolFilterOutputReference" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_vpc_ipam_pool.DataAwsVpcIpamPoolFilterOutputReference;

new DataAwsVpcIpamPoolFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilter">DataAwsVpcIpamPoolFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.property.internalValue"></a>

```java
public IResolvable|DataAwsVpcIpamPoolFilter getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilter">DataAwsVpcIpamPoolFilter</a>

---


### DataAwsVpcIpamPoolSourceResourceList <a name="DataAwsVpcIpamPoolSourceResourceList" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_vpc_ipam_pool.DataAwsVpcIpamPoolSourceResourceList;

new DataAwsVpcIpamPoolSourceResourceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceList.get"></a>

```java
public DataAwsVpcIpamPoolSourceResourceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsVpcIpamPoolSourceResourceOutputReference <a name="DataAwsVpcIpamPoolSourceResourceOutputReference" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_vpc_ipam_pool.DataAwsVpcIpamPoolSourceResourceOutputReference;

new DataAwsVpcIpamPoolSourceResourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.property.resourceOwner">resourceOwner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.property.resourceRegion">resourceRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResource">DataAwsVpcIpamPoolSourceResource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

---

##### `resourceOwner`<sup>Required</sup> <a name="resourceOwner" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.property.resourceOwner"></a>

```java
public java.lang.String getResourceOwner();
```

- *Type:* java.lang.String

---

##### `resourceRegion`<sup>Required</sup> <a name="resourceRegion" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.property.resourceRegion"></a>

```java
public java.lang.String getResourceRegion();
```

- *Type:* java.lang.String

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.property.internalValue"></a>

```java
public DataAwsVpcIpamPoolSourceResource getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResource">DataAwsVpcIpamPoolSourceResource</a>

---


### DataAwsVpcIpamPoolTimeoutsOutputReference <a name="DataAwsVpcIpamPoolTimeoutsOutputReference" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_vpc_ipam_pool.DataAwsVpcIpamPoolTimeoutsOutputReference;

new DataAwsVpcIpamPoolTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeouts">DataAwsVpcIpamPoolTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataAwsVpcIpamPoolTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeouts">DataAwsVpcIpamPoolTimeouts</a>

---




# `dataAwsEc2ManagedPrefixList` Submodule <a name="`dataAwsEc2ManagedPrefixList` Submodule" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEc2ManagedPrefixList <a name="DataAwsEc2ManagedPrefixList" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/ec2_managed_prefix_list aws_ec2_managed_prefix_list}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_ec2_managed_prefix_list.DataAwsEc2ManagedPrefixList;

DataAwsEc2ManagedPrefixList.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .filter(IResolvable|java.util.List<DataAwsEc2ManagedPrefixListFilter>)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DataAwsEc2ManagedPrefixListTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.Initializer.parameter.filter">filter</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilter">DataAwsEc2ManagedPrefixListFilter</a>></code> | filter block. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/ec2_managed_prefix_list#id DataAwsEc2ManagedPrefixList#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/ec2_managed_prefix_list#name DataAwsEc2ManagedPrefixList#name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/ec2_managed_prefix_list#tags DataAwsEc2ManagedPrefixList#tags}. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeouts">DataAwsEc2ManagedPrefixListTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.Initializer.parameter.filter"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilter">DataAwsEc2ManagedPrefixListFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/ec2_managed_prefix_list#filter DataAwsEc2ManagedPrefixList#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/ec2_managed_prefix_list#id DataAwsEc2ManagedPrefixList#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/ec2_managed_prefix_list#name DataAwsEc2ManagedPrefixList#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/ec2_managed_prefix_list#region DataAwsEc2ManagedPrefixList#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/ec2_managed_prefix_list#tags DataAwsEc2ManagedPrefixList#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeouts">DataAwsEc2ManagedPrefixListTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/ec2_managed_prefix_list#timeouts DataAwsEc2ManagedPrefixList#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.putFilter"></a>

```java
public void putFilter(IResolvable|java.util.List<DataAwsEc2ManagedPrefixListFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.putFilter.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilter">DataAwsEc2ManagedPrefixListFilter</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.putTimeouts"></a>

```java
public void putTimeouts(DataAwsEc2ManagedPrefixListTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeouts">DataAwsEc2ManagedPrefixListTimeouts</a>

---

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.resetName"></a>

```java
public void resetName()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsEc2ManagedPrefixList resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.isConstruct"></a>

```java
import io.cdktn.providers.aws.data_aws_ec2_managed_prefix_list.DataAwsEc2ManagedPrefixList;

DataAwsEc2ManagedPrefixList.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.data_aws_ec2_managed_prefix_list.DataAwsEc2ManagedPrefixList;

DataAwsEc2ManagedPrefixList.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.isTerraformDataSource"></a>

```java
import io.cdktn.providers.aws.data_aws_ec2_managed_prefix_list.DataAwsEc2ManagedPrefixList;

DataAwsEc2ManagedPrefixList.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.data_aws_ec2_managed_prefix_list.DataAwsEc2ManagedPrefixList;

DataAwsEc2ManagedPrefixList.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsEc2ManagedPrefixList.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsEc2ManagedPrefixList resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsEc2ManagedPrefixList to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsEc2ManagedPrefixList that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/ec2_managed_prefix_list#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsEc2ManagedPrefixList to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.addressFamily">addressFamily</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.entries">entries</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesList">DataAwsEc2ManagedPrefixListEntriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterList">DataAwsEc2ManagedPrefixListFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.maxEntries">maxEntries</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.ownerId">ownerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference">DataAwsEc2ManagedPrefixListTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.version">version</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.filterInput">filterInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilter">DataAwsEc2ManagedPrefixListFilter</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeouts">DataAwsEc2ManagedPrefixListTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `addressFamily`<sup>Required</sup> <a name="addressFamily" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.addressFamily"></a>

```java
public java.lang.String getAddressFamily();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `entries`<sup>Required</sup> <a name="entries" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.entries"></a>

```java
public DataAwsEc2ManagedPrefixListEntriesList getEntries();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesList">DataAwsEc2ManagedPrefixListEntriesList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.filter"></a>

```java
public DataAwsEc2ManagedPrefixListFilterList getFilter();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterList">DataAwsEc2ManagedPrefixListFilterList</a>

---

##### `maxEntries`<sup>Required</sup> <a name="maxEntries" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.maxEntries"></a>

```java
public java.lang.Number getMaxEntries();
```

- *Type:* java.lang.Number

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.ownerId"></a>

```java
public java.lang.String getOwnerId();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.timeouts"></a>

```java
public DataAwsEc2ManagedPrefixListTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference">DataAwsEc2ManagedPrefixListTimeoutsOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.version"></a>

```java
public java.lang.Number getVersion();
```

- *Type:* java.lang.Number

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.filterInput"></a>

```java
public IResolvable|java.util.List<DataAwsEc2ManagedPrefixListFilter> getFilterInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilter">DataAwsEc2ManagedPrefixListFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.timeoutsInput"></a>

```java
public IResolvable|DataAwsEc2ManagedPrefixListTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeouts">DataAwsEc2ManagedPrefixListTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEc2ManagedPrefixListConfig <a name="DataAwsEc2ManagedPrefixListConfig" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_ec2_managed_prefix_list.DataAwsEc2ManagedPrefixListConfig;

DataAwsEc2ManagedPrefixListConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .filter(IResolvable|java.util.List<DataAwsEc2ManagedPrefixListFilter>)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DataAwsEc2ManagedPrefixListTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListConfig.property.filter">filter</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilter">DataAwsEc2ManagedPrefixListFilter</a>></code> | filter block. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/ec2_managed_prefix_list#id DataAwsEc2ManagedPrefixList#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/ec2_managed_prefix_list#name DataAwsEc2ManagedPrefixList#name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/ec2_managed_prefix_list#tags DataAwsEc2ManagedPrefixList#tags}. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeouts">DataAwsEc2ManagedPrefixListTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListConfig.property.filter"></a>

```java
public IResolvable|java.util.List<DataAwsEc2ManagedPrefixListFilter> getFilter();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilter">DataAwsEc2ManagedPrefixListFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/ec2_managed_prefix_list#filter DataAwsEc2ManagedPrefixList#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/ec2_managed_prefix_list#id DataAwsEc2ManagedPrefixList#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/ec2_managed_prefix_list#name DataAwsEc2ManagedPrefixList#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/ec2_managed_prefix_list#region DataAwsEc2ManagedPrefixList#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/ec2_managed_prefix_list#tags DataAwsEc2ManagedPrefixList#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListConfig.property.timeouts"></a>

```java
public DataAwsEc2ManagedPrefixListTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeouts">DataAwsEc2ManagedPrefixListTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/ec2_managed_prefix_list#timeouts DataAwsEc2ManagedPrefixList#timeouts}

---

### DataAwsEc2ManagedPrefixListEntries <a name="DataAwsEc2ManagedPrefixListEntries" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntries.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_ec2_managed_prefix_list.DataAwsEc2ManagedPrefixListEntries;

DataAwsEc2ManagedPrefixListEntries.builder()
    .build();
```


### DataAwsEc2ManagedPrefixListFilter <a name="DataAwsEc2ManagedPrefixListFilter" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilter.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_ec2_managed_prefix_list.DataAwsEc2ManagedPrefixListFilter;

DataAwsEc2ManagedPrefixListFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/ec2_managed_prefix_list#name DataAwsEc2ManagedPrefixList#name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/ec2_managed_prefix_list#values DataAwsEc2ManagedPrefixList#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/ec2_managed_prefix_list#name DataAwsEc2ManagedPrefixList#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/ec2_managed_prefix_list#values DataAwsEc2ManagedPrefixList#values}.

---

### DataAwsEc2ManagedPrefixListTimeouts <a name="DataAwsEc2ManagedPrefixListTimeouts" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_ec2_managed_prefix_list.DataAwsEc2ManagedPrefixListTimeouts;

DataAwsEc2ManagedPrefixListTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/ec2_managed_prefix_list#read DataAwsEc2ManagedPrefixList#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/ec2_managed_prefix_list#read DataAwsEc2ManagedPrefixList#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsEc2ManagedPrefixListEntriesList <a name="DataAwsEc2ManagedPrefixListEntriesList" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_ec2_managed_prefix_list.DataAwsEc2ManagedPrefixListEntriesList;

new DataAwsEc2ManagedPrefixListEntriesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesList.get"></a>

```java
public DataAwsEc2ManagedPrefixListEntriesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsEc2ManagedPrefixListEntriesOutputReference <a name="DataAwsEc2ManagedPrefixListEntriesOutputReference" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_ec2_managed_prefix_list.DataAwsEc2ManagedPrefixListEntriesOutputReference;

new DataAwsEc2ManagedPrefixListEntriesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.property.cidr">cidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntries">DataAwsEc2ManagedPrefixListEntries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.property.cidr"></a>

```java
public java.lang.String getCidr();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.property.internalValue"></a>

```java
public DataAwsEc2ManagedPrefixListEntries getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntries">DataAwsEc2ManagedPrefixListEntries</a>

---


### DataAwsEc2ManagedPrefixListFilterList <a name="DataAwsEc2ManagedPrefixListFilterList" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_ec2_managed_prefix_list.DataAwsEc2ManagedPrefixListFilterList;

new DataAwsEc2ManagedPrefixListFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterList.get"></a>

```java
public DataAwsEc2ManagedPrefixListFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilter">DataAwsEc2ManagedPrefixListFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataAwsEc2ManagedPrefixListFilter> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilter">DataAwsEc2ManagedPrefixListFilter</a>>

---


### DataAwsEc2ManagedPrefixListFilterOutputReference <a name="DataAwsEc2ManagedPrefixListFilterOutputReference" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_ec2_managed_prefix_list.DataAwsEc2ManagedPrefixListFilterOutputReference;

new DataAwsEc2ManagedPrefixListFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilter">DataAwsEc2ManagedPrefixListFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.property.internalValue"></a>

```java
public IResolvable|DataAwsEc2ManagedPrefixListFilter getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilter">DataAwsEc2ManagedPrefixListFilter</a>

---


### DataAwsEc2ManagedPrefixListTimeoutsOutputReference <a name="DataAwsEc2ManagedPrefixListTimeoutsOutputReference" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_ec2_managed_prefix_list.DataAwsEc2ManagedPrefixListTimeoutsOutputReference;

new DataAwsEc2ManagedPrefixListTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeouts">DataAwsEc2ManagedPrefixListTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataAwsEc2ManagedPrefixListTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeouts">DataAwsEc2ManagedPrefixListTimeouts</a>

---




# `dataAwsEcrRepositoryCreationTemplate` Submodule <a name="`dataAwsEcrRepositoryCreationTemplate` Submodule" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEcrRepositoryCreationTemplate <a name="DataAwsEcrRepositoryCreationTemplate" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/ecr_repository_creation_template aws_ecr_repository_creation_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_ecr_repository_creation_template.DataAwsEcrRepositoryCreationTemplate;

DataAwsEcrRepositoryCreationTemplate.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .prefix(java.lang.String)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .resourceTags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.Initializer.parameter.prefix">prefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/ecr_repository_creation_template#prefix DataAwsEcrRepositoryCreationTemplate#prefix}. |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/ecr_repository_creation_template#id DataAwsEcrRepositoryCreationTemplate#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.Initializer.parameter.resourceTags">resourceTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/ecr_repository_creation_template#resource_tags DataAwsEcrRepositoryCreationTemplate#resource_tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.Initializer.parameter.prefix"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/ecr_repository_creation_template#prefix DataAwsEcrRepositoryCreationTemplate#prefix}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/ecr_repository_creation_template#id DataAwsEcrRepositoryCreationTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/ecr_repository_creation_template#region DataAwsEcrRepositoryCreationTemplate#region}

---

##### `resourceTags`<sup>Optional</sup> <a name="resourceTags" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.Initializer.parameter.resourceTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/ecr_repository_creation_template#resource_tags DataAwsEcrRepositoryCreationTemplate#resource_tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.resetResourceTags">resetResourceTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.resetId"></a>

```java
public void resetId()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetResourceTags` <a name="resetResourceTags" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.resetResourceTags"></a>

```java
public void resetResourceTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsEcrRepositoryCreationTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.isConstruct"></a>

```java
import io.cdktn.providers.aws.data_aws_ecr_repository_creation_template.DataAwsEcrRepositoryCreationTemplate;

DataAwsEcrRepositoryCreationTemplate.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.data_aws_ecr_repository_creation_template.DataAwsEcrRepositoryCreationTemplate;

DataAwsEcrRepositoryCreationTemplate.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.isTerraformDataSource"></a>

```java
import io.cdktn.providers.aws.data_aws_ecr_repository_creation_template.DataAwsEcrRepositoryCreationTemplate;

DataAwsEcrRepositoryCreationTemplate.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.data_aws_ecr_repository_creation_template.DataAwsEcrRepositoryCreationTemplate;

DataAwsEcrRepositoryCreationTemplate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsEcrRepositoryCreationTemplate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsEcrRepositoryCreationTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsEcrRepositoryCreationTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsEcrRepositoryCreationTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/ecr_repository_creation_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsEcrRepositoryCreationTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.appliedFor">appliedFor</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.customRoleArn">customRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList">DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.imageTagMutability">imageTagMutability</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.imageTagMutabilityExclusionFilter">imageTagMutabilityExclusionFilter</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterList">DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.lifecyclePolicy">lifecyclePolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.registryId">registryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.repositoryPolicy">repositoryPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.prefixInput">prefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.resourceTagsInput">resourceTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.resourceTags">resourceTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `appliedFor`<sup>Required</sup> <a name="appliedFor" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.appliedFor"></a>

```java
public java.util.List<java.lang.String> getAppliedFor();
```

- *Type:* java.util.List<java.lang.String>

---

##### `customRoleArn`<sup>Required</sup> <a name="customRoleArn" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.customRoleArn"></a>

```java
public java.lang.String getCustomRoleArn();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `encryptionConfiguration`<sup>Required</sup> <a name="encryptionConfiguration" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.encryptionConfiguration"></a>

```java
public DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList getEncryptionConfiguration();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList">DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList</a>

---

##### `imageTagMutability`<sup>Required</sup> <a name="imageTagMutability" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.imageTagMutability"></a>

```java
public java.lang.String getImageTagMutability();
```

- *Type:* java.lang.String

---

##### `imageTagMutabilityExclusionFilter`<sup>Required</sup> <a name="imageTagMutabilityExclusionFilter" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.imageTagMutabilityExclusionFilter"></a>

```java
public DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterList getImageTagMutabilityExclusionFilter();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterList">DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterList</a>

---

##### `lifecyclePolicy`<sup>Required</sup> <a name="lifecyclePolicy" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.lifecyclePolicy"></a>

```java
public java.lang.String getLifecyclePolicy();
```

- *Type:* java.lang.String

---

##### `registryId`<sup>Required</sup> <a name="registryId" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.registryId"></a>

```java
public java.lang.String getRegistryId();
```

- *Type:* java.lang.String

---

##### `repositoryPolicy`<sup>Required</sup> <a name="repositoryPolicy" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.repositoryPolicy"></a>

```java
public java.lang.String getRepositoryPolicy();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.prefixInput"></a>

```java
public java.lang.String getPrefixInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `resourceTagsInput`<sup>Optional</sup> <a name="resourceTagsInput" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.resourceTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResourceTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `resourceTags`<sup>Required</sup> <a name="resourceTags" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.resourceTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResourceTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEcrRepositoryCreationTemplateConfig <a name="DataAwsEcrRepositoryCreationTemplateConfig" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_ecr_repository_creation_template.DataAwsEcrRepositoryCreationTemplateConfig;

DataAwsEcrRepositoryCreationTemplateConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .prefix(java.lang.String)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .resourceTags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateConfig.property.prefix">prefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/ecr_repository_creation_template#prefix DataAwsEcrRepositoryCreationTemplate#prefix}. |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/ecr_repository_creation_template#id DataAwsEcrRepositoryCreationTemplate#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateConfig.property.resourceTags">resourceTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/ecr_repository_creation_template#resource_tags DataAwsEcrRepositoryCreationTemplate#resource_tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateConfig.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/ecr_repository_creation_template#prefix DataAwsEcrRepositoryCreationTemplate#prefix}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/ecr_repository_creation_template#id DataAwsEcrRepositoryCreationTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/ecr_repository_creation_template#region DataAwsEcrRepositoryCreationTemplate#region}

---

##### `resourceTags`<sup>Optional</sup> <a name="resourceTags" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateConfig.property.resourceTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResourceTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/ecr_repository_creation_template#resource_tags DataAwsEcrRepositoryCreationTemplate#resource_tags}.

---

### DataAwsEcrRepositoryCreationTemplateEncryptionConfiguration <a name="DataAwsEcrRepositoryCreationTemplateEncryptionConfiguration" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfiguration.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_ecr_repository_creation_template.DataAwsEcrRepositoryCreationTemplateEncryptionConfiguration;

DataAwsEcrRepositoryCreationTemplateEncryptionConfiguration.builder()
    .build();
```


### DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilter <a name="DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilter" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilter.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_ecr_repository_creation_template.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilter;

DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilter.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList <a name="DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_ecr_repository_creation_template.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList;

new DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList.get"></a>

```java
public DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference <a name="DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_ecr_repository_creation_template.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference;

new DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.encryptionType">encryptionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfiguration">DataAwsEcrRepositoryCreationTemplateEncryptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `encryptionType`<sup>Required</sup> <a name="encryptionType" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.encryptionType"></a>

```java
public java.lang.String getEncryptionType();
```

- *Type:* java.lang.String

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.internalValue"></a>

```java
public DataAwsEcrRepositoryCreationTemplateEncryptionConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfiguration">DataAwsEcrRepositoryCreationTemplateEncryptionConfiguration</a>

---


### DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterList <a name="DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterList" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_ecr_repository_creation_template.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterList;

new DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterList.get"></a>

```java
public DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference <a name="DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_ecr_repository_creation_template.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference;

new DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.property.filter">filter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.property.filterType">filterType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilter">DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

---

##### `filterType`<sup>Required</sup> <a name="filterType" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.property.filterType"></a>

```java
public java.lang.String getFilterType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.property.internalValue"></a>

```java
public DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilter getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilter">DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilter</a>

---




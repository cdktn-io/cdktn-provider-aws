# `dataAwsOrganizationsPoliciesForTarget` Submodule <a name="`dataAwsOrganizationsPoliciesForTarget` Submodule" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsOrganizationsPoliciesForTarget <a name="DataAwsOrganizationsPoliciesForTarget" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/data-sources/organizations_policies_for_target aws_organizations_policies_for_target}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_organizations_policies_for_target.DataAwsOrganizationsPoliciesForTarget;

DataAwsOrganizationsPoliciesForTarget.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .filter(java.lang.String)
    .targetId(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.Initializer.parameter.filter">filter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/data-sources/organizations_policies_for_target#filter DataAwsOrganizationsPoliciesForTarget#filter}. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.Initializer.parameter.targetId">targetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/data-sources/organizations_policies_for_target#target_id DataAwsOrganizationsPoliciesForTarget#target_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/data-sources/organizations_policies_for_target#id DataAwsOrganizationsPoliciesForTarget#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.Initializer.parameter.filter"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/data-sources/organizations_policies_for_target#filter DataAwsOrganizationsPoliciesForTarget#filter}.

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.Initializer.parameter.targetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/data-sources/organizations_policies_for_target#target_id DataAwsOrganizationsPoliciesForTarget#target_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/data-sources/organizations_policies_for_target#id DataAwsOrganizationsPoliciesForTarget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsOrganizationsPoliciesForTarget resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.isConstruct"></a>

```java
import io.cdktn.providers.aws.data_aws_organizations_policies_for_target.DataAwsOrganizationsPoliciesForTarget;

DataAwsOrganizationsPoliciesForTarget.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.data_aws_organizations_policies_for_target.DataAwsOrganizationsPoliciesForTarget;

DataAwsOrganizationsPoliciesForTarget.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.isTerraformDataSource"></a>

```java
import io.cdktn.providers.aws.data_aws_organizations_policies_for_target.DataAwsOrganizationsPoliciesForTarget;

DataAwsOrganizationsPoliciesForTarget.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.data_aws_organizations_policies_for_target.DataAwsOrganizationsPoliciesForTarget;

DataAwsOrganizationsPoliciesForTarget.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsOrganizationsPoliciesForTarget.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsOrganizationsPoliciesForTarget resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsOrganizationsPoliciesForTarget to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsOrganizationsPoliciesForTarget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/data-sources/organizations_policies_for_target#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsOrganizationsPoliciesForTarget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.property.ids">ids</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.property.filterInput">filterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.property.targetIdInput">targetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.property.filter">filter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.property.targetId">targetId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `ids`<sup>Required</sup> <a name="ids" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.property.ids"></a>

```java
public java.util.List<java.lang.String> getIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.property.filterInput"></a>

```java
public java.lang.String getFilterInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `targetIdInput`<sup>Optional</sup> <a name="targetIdInput" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.property.targetIdInput"></a>

```java
public java.lang.String getTargetIdInput();
```

- *Type:* java.lang.String

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.property.targetId"></a>

```java
public java.lang.String getTargetId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTarget.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsOrganizationsPoliciesForTargetConfig <a name="DataAwsOrganizationsPoliciesForTargetConfig" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTargetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTargetConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_organizations_policies_for_target.DataAwsOrganizationsPoliciesForTargetConfig;

DataAwsOrganizationsPoliciesForTargetConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .filter(java.lang.String)
    .targetId(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTargetConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTargetConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTargetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTargetConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTargetConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTargetConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTargetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTargetConfig.property.filter">filter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/data-sources/organizations_policies_for_target#filter DataAwsOrganizationsPoliciesForTarget#filter}. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTargetConfig.property.targetId">targetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/data-sources/organizations_policies_for_target#target_id DataAwsOrganizationsPoliciesForTarget#target_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTargetConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/data-sources/organizations_policies_for_target#id DataAwsOrganizationsPoliciesForTarget#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTargetConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTargetConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTargetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTargetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTargetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTargetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTargetConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTargetConfig.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/data-sources/organizations_policies_for_target#filter DataAwsOrganizationsPoliciesForTarget#filter}.

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTargetConfig.property.targetId"></a>

```java
public java.lang.String getTargetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/data-sources/organizations_policies_for_target#target_id DataAwsOrganizationsPoliciesForTarget#target_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.dataAwsOrganizationsPoliciesForTarget.DataAwsOrganizationsPoliciesForTargetConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/data-sources/organizations_policies_for_target#id DataAwsOrganizationsPoliciesForTarget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---




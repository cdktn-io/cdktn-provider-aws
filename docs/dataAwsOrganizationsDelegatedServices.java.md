# `dataAwsOrganizationsDelegatedServices` Submodule <a name="`dataAwsOrganizationsDelegatedServices` Submodule" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsOrganizationsDelegatedServices <a name="DataAwsOrganizationsDelegatedServices" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/organizations_delegated_services aws_organizations_delegated_services}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_organizations_delegated_services.DataAwsOrganizationsDelegatedServices;

DataAwsOrganizationsDelegatedServices.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/organizations_delegated_services#account_id DataAwsOrganizationsDelegatedServices#account_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/organizations_delegated_services#id DataAwsOrganizationsDelegatedServices#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/organizations_delegated_services#account_id DataAwsOrganizationsDelegatedServices#account_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/organizations_delegated_services#id DataAwsOrganizationsDelegatedServices#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsOrganizationsDelegatedServices resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.isConstruct"></a>

```java
import io.cdktn.providers.aws.data_aws_organizations_delegated_services.DataAwsOrganizationsDelegatedServices;

DataAwsOrganizationsDelegatedServices.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.data_aws_organizations_delegated_services.DataAwsOrganizationsDelegatedServices;

DataAwsOrganizationsDelegatedServices.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.isTerraformDataSource"></a>

```java
import io.cdktn.providers.aws.data_aws_organizations_delegated_services.DataAwsOrganizationsDelegatedServices;

DataAwsOrganizationsDelegatedServices.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.data_aws_organizations_delegated_services.DataAwsOrganizationsDelegatedServices;

DataAwsOrganizationsDelegatedServices.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsOrganizationsDelegatedServices.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsOrganizationsDelegatedServices resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsOrganizationsDelegatedServices to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsOrganizationsDelegatedServices that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/organizations_delegated_services#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsOrganizationsDelegatedServices to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.delegatedServices">delegatedServices</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesList">DataAwsOrganizationsDelegatedServicesDelegatedServicesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `delegatedServices`<sup>Required</sup> <a name="delegatedServices" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.delegatedServices"></a>

```java
public DataAwsOrganizationsDelegatedServicesDelegatedServicesList getDelegatedServices();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesList">DataAwsOrganizationsDelegatedServicesDelegatedServicesList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServices.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsOrganizationsDelegatedServicesConfig <a name="DataAwsOrganizationsDelegatedServicesConfig" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_organizations_delegated_services.DataAwsOrganizationsDelegatedServicesConfig;

DataAwsOrganizationsDelegatedServicesConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/organizations_delegated_services#account_id DataAwsOrganizationsDelegatedServices#account_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/organizations_delegated_services#id DataAwsOrganizationsDelegatedServices#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/organizations_delegated_services#account_id DataAwsOrganizationsDelegatedServices#account_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/organizations_delegated_services#id DataAwsOrganizationsDelegatedServices#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsOrganizationsDelegatedServicesDelegatedServices <a name="DataAwsOrganizationsDelegatedServicesDelegatedServices" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServices"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServices.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_organizations_delegated_services.DataAwsOrganizationsDelegatedServicesDelegatedServices;

DataAwsOrganizationsDelegatedServicesDelegatedServices.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsOrganizationsDelegatedServicesDelegatedServicesList <a name="DataAwsOrganizationsDelegatedServicesDelegatedServicesList" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_organizations_delegated_services.DataAwsOrganizationsDelegatedServicesDelegatedServicesList;

new DataAwsOrganizationsDelegatedServicesDelegatedServicesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesList.get"></a>

```java
public DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference <a name="DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_organizations_delegated_services.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference;

new DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.property.delegationEnabledDate">delegationEnabledDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.property.servicePrincipal">servicePrincipal</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServices">DataAwsOrganizationsDelegatedServicesDelegatedServices</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `delegationEnabledDate`<sup>Required</sup> <a name="delegationEnabledDate" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.property.delegationEnabledDate"></a>

```java
public java.lang.String getDelegationEnabledDate();
```

- *Type:* java.lang.String

---

##### `servicePrincipal`<sup>Required</sup> <a name="servicePrincipal" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.property.servicePrincipal"></a>

```java
public java.lang.String getServicePrincipal();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference.property.internalValue"></a>

```java
public DataAwsOrganizationsDelegatedServicesDelegatedServices getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOrganizationsDelegatedServices.DataAwsOrganizationsDelegatedServicesDelegatedServices">DataAwsOrganizationsDelegatedServicesDelegatedServices</a>

---




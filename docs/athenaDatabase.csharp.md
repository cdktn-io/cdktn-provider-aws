# `athenaDatabase` Submodule <a name="`athenaDatabase` Submodule" id="@cdktn/provider-aws.athenaDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AthenaDatabase <a name="AthenaDatabase" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/athena_database aws_athena_database}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AthenaDatabase(Construct Scope, string Id, AthenaDatabaseConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabase.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabase.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabase.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabaseConfig">AthenaDatabaseConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabaseConfig">AthenaDatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabase.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabase.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabase.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabase.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabase.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabase.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabase.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabase.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabase.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabase.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabase.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabase.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabase.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabase.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabase.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabase.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabase.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabase.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabase.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabase.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabase.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabase.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabase.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabase.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabase.putAclConfiguration">PutAclConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabase.putEncryptionConfiguration">PutEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabase.resetAclConfiguration">ResetAclConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabase.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabase.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabase.resetEncryptionConfiguration">ResetEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabase.resetExpectedBucketOwner">ResetExpectedBucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabase.resetForceDestroy">ResetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabase.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabase.resetProperties">ResetProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabase.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabase.resetWorkgroup">ResetWorkgroup</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAclConfiguration` <a name="PutAclConfiguration" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.putAclConfiguration"></a>

```csharp
private void PutAclConfiguration(AthenaDatabaseAclConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.putAclConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabaseAclConfiguration">AthenaDatabaseAclConfiguration</a>

---

##### `PutEncryptionConfiguration` <a name="PutEncryptionConfiguration" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.putEncryptionConfiguration"></a>

```csharp
private void PutEncryptionConfiguration(AthenaDatabaseEncryptionConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.putEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfiguration">AthenaDatabaseEncryptionConfiguration</a>

---

##### `ResetAclConfiguration` <a name="ResetAclConfiguration" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.resetAclConfiguration"></a>

```csharp
private void ResetAclConfiguration()
```

##### `ResetBucket` <a name="ResetBucket" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.resetBucket"></a>

```csharp
private void ResetBucket()
```

##### `ResetComment` <a name="ResetComment" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetEncryptionConfiguration` <a name="ResetEncryptionConfiguration" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.resetEncryptionConfiguration"></a>

```csharp
private void ResetEncryptionConfiguration()
```

##### `ResetExpectedBucketOwner` <a name="ResetExpectedBucketOwner" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.resetExpectedBucketOwner"></a>

```csharp
private void ResetExpectedBucketOwner()
```

##### `ResetForceDestroy` <a name="ResetForceDestroy" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.resetForceDestroy"></a>

```csharp
private void ResetForceDestroy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.resetProperties"></a>

```csharp
private void ResetProperties()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetWorkgroup` <a name="ResetWorkgroup" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.resetWorkgroup"></a>

```csharp
private void ResetWorkgroup()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabase.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabase.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabase.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabase.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AthenaDatabase resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

AthenaDatabase.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

AthenaDatabase.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

AthenaDatabase.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

AthenaDatabase.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a AthenaDatabase resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AthenaDatabase to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AthenaDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/athena_database#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the AthenaDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabase.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabase.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabase.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabase.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabase.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabase.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabase.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabase.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabase.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabase.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabase.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabase.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabase.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabase.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabase.property.aclConfiguration">AclConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference">AthenaDatabaseAclConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabase.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference">AthenaDatabaseEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabase.property.aclConfigurationInput">AclConfigurationInput</a></code> | <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabaseAclConfiguration">AthenaDatabaseAclConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabase.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabase.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabase.property.encryptionConfigurationInput">EncryptionConfigurationInput</a></code> | <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfiguration">AthenaDatabaseEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabase.property.expectedBucketOwnerInput">ExpectedBucketOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabase.property.forceDestroyInput">ForceDestroyInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabase.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabase.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabase.property.propertiesInput">PropertiesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabase.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabase.property.workgroupInput">WorkgroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabase.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabase.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabase.property.expectedBucketOwner">ExpectedBucketOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabase.property.forceDestroy">ForceDestroy</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabase.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabase.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabase.property.properties">Properties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabase.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabase.property.workgroup">Workgroup</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AclConfiguration`<sup>Required</sup> <a name="AclConfiguration" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.property.aclConfiguration"></a>

```csharp
public AthenaDatabaseAclConfigurationOutputReference AclConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference">AthenaDatabaseAclConfigurationOutputReference</a>

---

##### `EncryptionConfiguration`<sup>Required</sup> <a name="EncryptionConfiguration" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.property.encryptionConfiguration"></a>

```csharp
public AthenaDatabaseEncryptionConfigurationOutputReference EncryptionConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference">AthenaDatabaseEncryptionConfigurationOutputReference</a>

---

##### `AclConfigurationInput`<sup>Optional</sup> <a name="AclConfigurationInput" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.property.aclConfigurationInput"></a>

```csharp
public AthenaDatabaseAclConfiguration AclConfigurationInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabaseAclConfiguration">AthenaDatabaseAclConfiguration</a>

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `EncryptionConfigurationInput`<sup>Optional</sup> <a name="EncryptionConfigurationInput" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.property.encryptionConfigurationInput"></a>

```csharp
public AthenaDatabaseEncryptionConfiguration EncryptionConfigurationInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfiguration">AthenaDatabaseEncryptionConfiguration</a>

---

##### `ExpectedBucketOwnerInput`<sup>Optional</sup> <a name="ExpectedBucketOwnerInput" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.property.expectedBucketOwnerInput"></a>

```csharp
public string ExpectedBucketOwnerInput { get; }
```

- *Type:* string

---

##### `ForceDestroyInput`<sup>Optional</sup> <a name="ForceDestroyInput" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.property.forceDestroyInput"></a>

```csharp
public bool|IResolvable ForceDestroyInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.property.propertiesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> PropertiesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `WorkgroupInput`<sup>Optional</sup> <a name="WorkgroupInput" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.property.workgroupInput"></a>

```csharp
public string WorkgroupInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `ExpectedBucketOwner`<sup>Required</sup> <a name="ExpectedBucketOwner" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.property.expectedBucketOwner"></a>

```csharp
public string ExpectedBucketOwner { get; }
```

- *Type:* string

---

##### `ForceDestroy`<sup>Required</sup> <a name="ForceDestroy" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.property.forceDestroy"></a>

```csharp
public bool|IResolvable ForceDestroy { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.property.properties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Properties { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Workgroup`<sup>Required</sup> <a name="Workgroup" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.property.workgroup"></a>

```csharp
public string Workgroup { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabase.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabase.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AthenaDatabaseAclConfiguration <a name="AthenaDatabaseAclConfiguration" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseAclConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseAclConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AthenaDatabaseAclConfiguration {
    string S3AclOption
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabaseAclConfiguration.property.s3AclOption">S3AclOption</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/athena_database#s3_acl_option AthenaDatabase#s3_acl_option}. |

---

##### `S3AclOption`<sup>Required</sup> <a name="S3AclOption" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseAclConfiguration.property.s3AclOption"></a>

```csharp
public string S3AclOption { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/athena_database#s3_acl_option AthenaDatabase#s3_acl_option}.

---

### AthenaDatabaseConfig <a name="AthenaDatabaseConfig" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AthenaDatabaseConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    AthenaDatabaseAclConfiguration AclConfiguration = null,
    string Bucket = null,
    string Comment = null,
    AthenaDatabaseEncryptionConfiguration EncryptionConfiguration = null,
    string ExpectedBucketOwner = null,
    bool|IResolvable ForceDestroy = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Properties = null,
    string Region = null,
    string Workgroup = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabaseConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabaseConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabaseConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabaseConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabaseConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabaseConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabaseConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabaseConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/athena_database#name AthenaDatabase#name}. |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabaseConfig.property.aclConfiguration">AclConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabaseAclConfiguration">AthenaDatabaseAclConfiguration</a></code> | acl_configuration block. |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabaseConfig.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/athena_database#bucket AthenaDatabase#bucket}. |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabaseConfig.property.comment">Comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/athena_database#comment AthenaDatabase#comment}. |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabaseConfig.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfiguration">AthenaDatabaseEncryptionConfiguration</a></code> | encryption_configuration block. |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabaseConfig.property.expectedBucketOwner">ExpectedBucketOwner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/athena_database#expected_bucket_owner AthenaDatabase#expected_bucket_owner}. |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabaseConfig.property.forceDestroy">ForceDestroy</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/athena_database#force_destroy AthenaDatabase#force_destroy}. |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabaseConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/athena_database#id AthenaDatabase#id}. |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabaseConfig.property.properties">Properties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/athena_database#properties AthenaDatabase#properties}. |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabaseConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabaseConfig.property.workgroup">Workgroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/athena_database#workgroup AthenaDatabase#workgroup}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/athena_database#name AthenaDatabase#name}.

---

##### `AclConfiguration`<sup>Optional</sup> <a name="AclConfiguration" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseConfig.property.aclConfiguration"></a>

```csharp
public AthenaDatabaseAclConfiguration AclConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabaseAclConfiguration">AthenaDatabaseAclConfiguration</a>

acl_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/athena_database#acl_configuration AthenaDatabase#acl_configuration}

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseConfig.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/athena_database#bucket AthenaDatabase#bucket}.

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseConfig.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/athena_database#comment AthenaDatabase#comment}.

---

##### `EncryptionConfiguration`<sup>Optional</sup> <a name="EncryptionConfiguration" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseConfig.property.encryptionConfiguration"></a>

```csharp
public AthenaDatabaseEncryptionConfiguration EncryptionConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfiguration">AthenaDatabaseEncryptionConfiguration</a>

encryption_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/athena_database#encryption_configuration AthenaDatabase#encryption_configuration}

---

##### `ExpectedBucketOwner`<sup>Optional</sup> <a name="ExpectedBucketOwner" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseConfig.property.expectedBucketOwner"></a>

```csharp
public string ExpectedBucketOwner { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/athena_database#expected_bucket_owner AthenaDatabase#expected_bucket_owner}.

---

##### `ForceDestroy`<sup>Optional</sup> <a name="ForceDestroy" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseConfig.property.forceDestroy"></a>

```csharp
public bool|IResolvable ForceDestroy { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/athena_database#force_destroy AthenaDatabase#force_destroy}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/athena_database#id AthenaDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseConfig.property.properties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Properties { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/athena_database#properties AthenaDatabase#properties}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/athena_database#region AthenaDatabase#region}

---

##### `Workgroup`<sup>Optional</sup> <a name="Workgroup" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseConfig.property.workgroup"></a>

```csharp
public string Workgroup { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/athena_database#workgroup AthenaDatabase#workgroup}.

---

### AthenaDatabaseEncryptionConfiguration <a name="AthenaDatabaseEncryptionConfiguration" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AthenaDatabaseEncryptionConfiguration {
    string EncryptionOption,
    string KmsKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfiguration.property.encryptionOption">EncryptionOption</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/athena_database#encryption_option AthenaDatabase#encryption_option}. |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfiguration.property.kmsKey">KmsKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/athena_database#kms_key AthenaDatabase#kms_key}. |

---

##### `EncryptionOption`<sup>Required</sup> <a name="EncryptionOption" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfiguration.property.encryptionOption"></a>

```csharp
public string EncryptionOption { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/athena_database#encryption_option AthenaDatabase#encryption_option}.

---

##### `KmsKey`<sup>Optional</sup> <a name="KmsKey" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfiguration.property.kmsKey"></a>

```csharp
public string KmsKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/athena_database#kms_key AthenaDatabase#kms_key}.

---

## Classes <a name="Classes" id="Classes"></a>

### AthenaDatabaseAclConfigurationOutputReference <a name="AthenaDatabaseAclConfigurationOutputReference" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AthenaDatabaseAclConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.property.s3AclOptionInput">S3AclOptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.property.s3AclOption">S3AclOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabaseAclConfiguration">AthenaDatabaseAclConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3AclOptionInput`<sup>Optional</sup> <a name="S3AclOptionInput" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.property.s3AclOptionInput"></a>

```csharp
public string S3AclOptionInput { get; }
```

- *Type:* string

---

##### `S3AclOption`<sup>Required</sup> <a name="S3AclOption" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.property.s3AclOption"></a>

```csharp
public string S3AclOption { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseAclConfigurationOutputReference.property.internalValue"></a>

```csharp
public AthenaDatabaseAclConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabaseAclConfiguration">AthenaDatabaseAclConfiguration</a>

---


### AthenaDatabaseEncryptionConfigurationOutputReference <a name="AthenaDatabaseEncryptionConfigurationOutputReference" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AthenaDatabaseEncryptionConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.resetKmsKey">ResetKmsKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKey` <a name="ResetKmsKey" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.resetKmsKey"></a>

```csharp
private void ResetKmsKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.property.encryptionOptionInput">EncryptionOptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.property.kmsKeyInput">KmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.property.encryptionOption">EncryptionOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.property.kmsKey">KmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfiguration">AthenaDatabaseEncryptionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EncryptionOptionInput`<sup>Optional</sup> <a name="EncryptionOptionInput" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.property.encryptionOptionInput"></a>

```csharp
public string EncryptionOptionInput { get; }
```

- *Type:* string

---

##### `KmsKeyInput`<sup>Optional</sup> <a name="KmsKeyInput" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.property.kmsKeyInput"></a>

```csharp
public string KmsKeyInput { get; }
```

- *Type:* string

---

##### `EncryptionOption`<sup>Required</sup> <a name="EncryptionOption" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.property.encryptionOption"></a>

```csharp
public string EncryptionOption { get; }
```

- *Type:* string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.property.kmsKey"></a>

```csharp
public string KmsKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfigurationOutputReference.property.internalValue"></a>

```csharp
public AthenaDatabaseEncryptionConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.athenaDatabase.AthenaDatabaseEncryptionConfiguration">AthenaDatabaseEncryptionConfiguration</a>

---




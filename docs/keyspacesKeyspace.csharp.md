# `keyspacesKeyspace` Submodule <a name="`keyspacesKeyspace` Submodule" id="@cdktn/provider-aws.keyspacesKeyspace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KeyspacesKeyspace <a name="KeyspacesKeyspace" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/keyspaces_keyspace aws_keyspaces_keyspace}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new KeyspacesKeyspace(Construct Scope, string Id, KeyspacesKeyspaceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceConfig">KeyspacesKeyspaceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceConfig">KeyspacesKeyspaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.putReplicationSpecification">PutReplicationSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.resetReplicationSpecification">ResetReplicationSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutReplicationSpecification` <a name="PutReplicationSpecification" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.putReplicationSpecification"></a>

```csharp
private void PutReplicationSpecification(KeyspacesKeyspaceReplicationSpecification Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.putReplicationSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecification">KeyspacesKeyspaceReplicationSpecification</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.putTimeouts"></a>

```csharp
private void PutTimeouts(KeyspacesKeyspaceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeouts">KeyspacesKeyspaceTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetReplicationSpecification` <a name="ResetReplicationSpecification" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.resetReplicationSpecification"></a>

```csharp
private void ResetReplicationSpecification()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a KeyspacesKeyspace resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

KeyspacesKeyspace.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

KeyspacesKeyspace.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

KeyspacesKeyspace.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

KeyspacesKeyspace.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a KeyspacesKeyspace resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KeyspacesKeyspace to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KeyspacesKeyspace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/keyspaces_keyspace#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the KeyspacesKeyspace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.replicationSpecification">ReplicationSpecification</a></code> | <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference">KeyspacesKeyspaceReplicationSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference">KeyspacesKeyspaceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.replicationSpecificationInput">ReplicationSpecificationInput</a></code> | <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecification">KeyspacesKeyspaceReplicationSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeouts">KeyspacesKeyspaceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `ReplicationSpecification`<sup>Required</sup> <a name="ReplicationSpecification" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.replicationSpecification"></a>

```csharp
public KeyspacesKeyspaceReplicationSpecificationOutputReference ReplicationSpecification { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference">KeyspacesKeyspaceReplicationSpecificationOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.timeouts"></a>

```csharp
public KeyspacesKeyspaceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference">KeyspacesKeyspaceTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ReplicationSpecificationInput`<sup>Optional</sup> <a name="ReplicationSpecificationInput" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.replicationSpecificationInput"></a>

```csharp
public KeyspacesKeyspaceReplicationSpecification ReplicationSpecificationInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecification">KeyspacesKeyspaceReplicationSpecification</a>

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.timeoutsInput"></a>

```csharp
public IResolvable|KeyspacesKeyspaceTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeouts">KeyspacesKeyspaceTimeouts</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspace.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KeyspacesKeyspaceConfig <a name="KeyspacesKeyspaceConfig" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new KeyspacesKeyspaceConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string Id = null,
    string Region = null,
    KeyspacesKeyspaceReplicationSpecification ReplicationSpecification = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    KeyspacesKeyspaceTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/keyspaces_keyspace#name KeyspacesKeyspace#name}. |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/keyspaces_keyspace#id KeyspacesKeyspace#id}. |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceConfig.property.replicationSpecification">ReplicationSpecification</a></code> | <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecification">KeyspacesKeyspaceReplicationSpecification</a></code> | replication_specification block. |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/keyspaces_keyspace#tags KeyspacesKeyspace#tags}. |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/keyspaces_keyspace#tags_all KeyspacesKeyspace#tags_all}. |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeouts">KeyspacesKeyspaceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/keyspaces_keyspace#name KeyspacesKeyspace#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/keyspaces_keyspace#id KeyspacesKeyspace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/keyspaces_keyspace#region KeyspacesKeyspace#region}

---

##### `ReplicationSpecification`<sup>Optional</sup> <a name="ReplicationSpecification" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceConfig.property.replicationSpecification"></a>

```csharp
public KeyspacesKeyspaceReplicationSpecification ReplicationSpecification { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecification">KeyspacesKeyspaceReplicationSpecification</a>

replication_specification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/keyspaces_keyspace#replication_specification KeyspacesKeyspace#replication_specification}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/keyspaces_keyspace#tags KeyspacesKeyspace#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/keyspaces_keyspace#tags_all KeyspacesKeyspace#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceConfig.property.timeouts"></a>

```csharp
public KeyspacesKeyspaceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeouts">KeyspacesKeyspaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/keyspaces_keyspace#timeouts KeyspacesKeyspace#timeouts}

---

### KeyspacesKeyspaceReplicationSpecification <a name="KeyspacesKeyspaceReplicationSpecification" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecification.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new KeyspacesKeyspaceReplicationSpecification {
    string[] RegionList = null,
    string ReplicationStrategy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecification.property.regionList">RegionList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/keyspaces_keyspace#region_list KeyspacesKeyspace#region_list}. |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecification.property.replicationStrategy">ReplicationStrategy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/keyspaces_keyspace#replication_strategy KeyspacesKeyspace#replication_strategy}. |

---

##### `RegionList`<sup>Optional</sup> <a name="RegionList" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecification.property.regionList"></a>

```csharp
public string[] RegionList { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/keyspaces_keyspace#region_list KeyspacesKeyspace#region_list}.

---

##### `ReplicationStrategy`<sup>Optional</sup> <a name="ReplicationStrategy" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecification.property.replicationStrategy"></a>

```csharp
public string ReplicationStrategy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/keyspaces_keyspace#replication_strategy KeyspacesKeyspace#replication_strategy}.

---

### KeyspacesKeyspaceTimeouts <a name="KeyspacesKeyspaceTimeouts" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new KeyspacesKeyspaceTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/keyspaces_keyspace#create KeyspacesKeyspace#create}. |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/keyspaces_keyspace#delete KeyspacesKeyspace#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/keyspaces_keyspace#create KeyspacesKeyspace#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/keyspaces_keyspace#delete KeyspacesKeyspace#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### KeyspacesKeyspaceReplicationSpecificationOutputReference <a name="KeyspacesKeyspaceReplicationSpecificationOutputReference" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new KeyspacesKeyspaceReplicationSpecificationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.resetRegionList">ResetRegionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.resetReplicationStrategy">ResetReplicationStrategy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegionList` <a name="ResetRegionList" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.resetRegionList"></a>

```csharp
private void ResetRegionList()
```

##### `ResetReplicationStrategy` <a name="ResetReplicationStrategy" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.resetReplicationStrategy"></a>

```csharp
private void ResetReplicationStrategy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.property.regionListInput">RegionListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.property.replicationStrategyInput">ReplicationStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.property.regionList">RegionList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.property.replicationStrategy">ReplicationStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecification">KeyspacesKeyspaceReplicationSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RegionListInput`<sup>Optional</sup> <a name="RegionListInput" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.property.regionListInput"></a>

```csharp
public string[] RegionListInput { get; }
```

- *Type:* string[]

---

##### `ReplicationStrategyInput`<sup>Optional</sup> <a name="ReplicationStrategyInput" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.property.replicationStrategyInput"></a>

```csharp
public string ReplicationStrategyInput { get; }
```

- *Type:* string

---

##### `RegionList`<sup>Required</sup> <a name="RegionList" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.property.regionList"></a>

```csharp
public string[] RegionList { get; }
```

- *Type:* string[]

---

##### `ReplicationStrategy`<sup>Required</sup> <a name="ReplicationStrategy" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.property.replicationStrategy"></a>

```csharp
public string ReplicationStrategy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecificationOutputReference.property.internalValue"></a>

```csharp
public KeyspacesKeyspaceReplicationSpecification InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceReplicationSpecification">KeyspacesKeyspaceReplicationSpecification</a>

---


### KeyspacesKeyspaceTimeoutsOutputReference <a name="KeyspacesKeyspaceTimeoutsOutputReference" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new KeyspacesKeyspaceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeouts">KeyspacesKeyspaceTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|KeyspacesKeyspaceTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.keyspacesKeyspace.KeyspacesKeyspaceTimeouts">KeyspacesKeyspaceTimeouts</a>

---




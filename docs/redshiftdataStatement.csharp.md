# `redshiftdataStatement` Submodule <a name="`redshiftdataStatement` Submodule" id="@cdktn/provider-aws.redshiftdataStatement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftdataStatement <a name="RedshiftdataStatement" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshiftdata_statement aws_redshiftdata_statement}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new RedshiftdataStatement(Construct Scope, string Id, RedshiftdataStatementConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig">RedshiftdataStatementConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig">RedshiftdataStatementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.putParameters">PutParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.resetClusterIdentifier">ResetClusterIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.resetDbUser">ResetDbUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.resetSecretArn">ResetSecretArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.resetStatementName">ResetStatementName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.resetWithEvent">ResetWithEvent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.resetWorkgroupName">ResetWorkgroupName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutParameters` <a name="PutParameters" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.putParameters"></a>

```csharp
private void PutParameters(IResolvable|RedshiftdataStatementParameters[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.putParameters.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParameters">RedshiftdataStatementParameters</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.putTimeouts"></a>

```csharp
private void PutTimeouts(RedshiftdataStatementTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeouts">RedshiftdataStatementTimeouts</a>

---

##### `ResetClusterIdentifier` <a name="ResetClusterIdentifier" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.resetClusterIdentifier"></a>

```csharp
private void ResetClusterIdentifier()
```

##### `ResetDbUser` <a name="ResetDbUser" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.resetDbUser"></a>

```csharp
private void ResetDbUser()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.resetParameters"></a>

```csharp
private void ResetParameters()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetSecretArn` <a name="ResetSecretArn" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.resetSecretArn"></a>

```csharp
private void ResetSecretArn()
```

##### `ResetStatementName` <a name="ResetStatementName" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.resetStatementName"></a>

```csharp
private void ResetStatementName()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetWithEvent` <a name="ResetWithEvent" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.resetWithEvent"></a>

```csharp
private void ResetWithEvent()
```

##### `ResetWorkgroupName` <a name="ResetWorkgroupName" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.resetWorkgroupName"></a>

```csharp
private void ResetWorkgroupName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a RedshiftdataStatement resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

RedshiftdataStatement.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

RedshiftdataStatement.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

RedshiftdataStatement.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

RedshiftdataStatement.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a RedshiftdataStatement resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RedshiftdataStatement to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RedshiftdataStatement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshiftdata_statement#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the RedshiftdataStatement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.parameters">Parameters</a></code> | <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersList">RedshiftdataStatementParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference">RedshiftdataStatementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.clusterIdentifierInput">ClusterIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.databaseInput">DatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.dbUserInput">DbUserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.parametersInput">ParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParameters">RedshiftdataStatementParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.secretArnInput">SecretArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.sqlInput">SqlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.statementNameInput">StatementNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeouts">RedshiftdataStatementTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.withEventInput">WithEventInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.workgroupNameInput">WorkgroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.clusterIdentifier">ClusterIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.database">Database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.dbUser">DbUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.secretArn">SecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.sql">Sql</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.statementName">StatementName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.withEvent">WithEvent</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.workgroupName">WorkgroupName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.parameters"></a>

```csharp
public RedshiftdataStatementParametersList Parameters { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersList">RedshiftdataStatementParametersList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.timeouts"></a>

```csharp
public RedshiftdataStatementTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference">RedshiftdataStatementTimeoutsOutputReference</a>

---

##### `ClusterIdentifierInput`<sup>Optional</sup> <a name="ClusterIdentifierInput" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.clusterIdentifierInput"></a>

```csharp
public string ClusterIdentifierInput { get; }
```

- *Type:* string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.databaseInput"></a>

```csharp
public string DatabaseInput { get; }
```

- *Type:* string

---

##### `DbUserInput`<sup>Optional</sup> <a name="DbUserInput" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.dbUserInput"></a>

```csharp
public string DbUserInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.parametersInput"></a>

```csharp
public IResolvable|RedshiftdataStatementParameters[] ParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParameters">RedshiftdataStatementParameters</a>[]

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SecretArnInput`<sup>Optional</sup> <a name="SecretArnInput" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.secretArnInput"></a>

```csharp
public string SecretArnInput { get; }
```

- *Type:* string

---

##### `SqlInput`<sup>Optional</sup> <a name="SqlInput" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.sqlInput"></a>

```csharp
public string SqlInput { get; }
```

- *Type:* string

---

##### `StatementNameInput`<sup>Optional</sup> <a name="StatementNameInput" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.statementNameInput"></a>

```csharp
public string StatementNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.timeoutsInput"></a>

```csharp
public IResolvable|RedshiftdataStatementTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeouts">RedshiftdataStatementTimeouts</a>

---

##### `WithEventInput`<sup>Optional</sup> <a name="WithEventInput" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.withEventInput"></a>

```csharp
public bool|IResolvable WithEventInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `WorkgroupNameInput`<sup>Optional</sup> <a name="WorkgroupNameInput" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.workgroupNameInput"></a>

```csharp
public string WorkgroupNameInput { get; }
```

- *Type:* string

---

##### `ClusterIdentifier`<sup>Required</sup> <a name="ClusterIdentifier" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.clusterIdentifier"></a>

```csharp
public string ClusterIdentifier { get; }
```

- *Type:* string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.database"></a>

```csharp
public string Database { get; }
```

- *Type:* string

---

##### `DbUser`<sup>Required</sup> <a name="DbUser" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.dbUser"></a>

```csharp
public string DbUser { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.secretArn"></a>

```csharp
public string SecretArn { get; }
```

- *Type:* string

---

##### `Sql`<sup>Required</sup> <a name="Sql" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.sql"></a>

```csharp
public string Sql { get; }
```

- *Type:* string

---

##### `StatementName`<sup>Required</sup> <a name="StatementName" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.statementName"></a>

```csharp
public string StatementName { get; }
```

- *Type:* string

---

##### `WithEvent`<sup>Required</sup> <a name="WithEvent" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.withEvent"></a>

```csharp
public bool|IResolvable WithEvent { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `WorkgroupName`<sup>Required</sup> <a name="WorkgroupName" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.workgroupName"></a>

```csharp
public string WorkgroupName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftdataStatementConfig <a name="RedshiftdataStatementConfig" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new RedshiftdataStatementConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Database,
    string Sql,
    string ClusterIdentifier = null,
    string DbUser = null,
    string Id = null,
    IResolvable|RedshiftdataStatementParameters[] Parameters = null,
    string Region = null,
    string SecretArn = null,
    string StatementName = null,
    RedshiftdataStatementTimeouts Timeouts = null,
    bool|IResolvable WithEvent = null,
    string WorkgroupName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.database">Database</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshiftdata_statement#database RedshiftdataStatement#database}. |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.sql">Sql</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshiftdata_statement#sql RedshiftdataStatement#sql}. |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.clusterIdentifier">ClusterIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshiftdata_statement#cluster_identifier RedshiftdataStatement#cluster_identifier}. |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.dbUser">DbUser</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshiftdata_statement#db_user RedshiftdataStatement#db_user}. |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshiftdata_statement#id RedshiftdataStatement#id}. |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.parameters">Parameters</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParameters">RedshiftdataStatementParameters</a>[]</code> | parameters block. |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.secretArn">SecretArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshiftdata_statement#secret_arn RedshiftdataStatement#secret_arn}. |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.statementName">StatementName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshiftdata_statement#statement_name RedshiftdataStatement#statement_name}. |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeouts">RedshiftdataStatementTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.withEvent">WithEvent</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshiftdata_statement#with_event RedshiftdataStatement#with_event}. |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.workgroupName">WorkgroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshiftdata_statement#workgroup_name RedshiftdataStatement#workgroup_name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.database"></a>

```csharp
public string Database { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshiftdata_statement#database RedshiftdataStatement#database}.

---

##### `Sql`<sup>Required</sup> <a name="Sql" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.sql"></a>

```csharp
public string Sql { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshiftdata_statement#sql RedshiftdataStatement#sql}.

---

##### `ClusterIdentifier`<sup>Optional</sup> <a name="ClusterIdentifier" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.clusterIdentifier"></a>

```csharp
public string ClusterIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshiftdata_statement#cluster_identifier RedshiftdataStatement#cluster_identifier}.

---

##### `DbUser`<sup>Optional</sup> <a name="DbUser" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.dbUser"></a>

```csharp
public string DbUser { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshiftdata_statement#db_user RedshiftdataStatement#db_user}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshiftdata_statement#id RedshiftdataStatement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.parameters"></a>

```csharp
public IResolvable|RedshiftdataStatementParameters[] Parameters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParameters">RedshiftdataStatementParameters</a>[]

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshiftdata_statement#parameters RedshiftdataStatement#parameters}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshiftdata_statement#region RedshiftdataStatement#region}

---

##### `SecretArn`<sup>Optional</sup> <a name="SecretArn" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.secretArn"></a>

```csharp
public string SecretArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshiftdata_statement#secret_arn RedshiftdataStatement#secret_arn}.

---

##### `StatementName`<sup>Optional</sup> <a name="StatementName" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.statementName"></a>

```csharp
public string StatementName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshiftdata_statement#statement_name RedshiftdataStatement#statement_name}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.timeouts"></a>

```csharp
public RedshiftdataStatementTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeouts">RedshiftdataStatementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshiftdata_statement#timeouts RedshiftdataStatement#timeouts}

---

##### `WithEvent`<sup>Optional</sup> <a name="WithEvent" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.withEvent"></a>

```csharp
public bool|IResolvable WithEvent { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshiftdata_statement#with_event RedshiftdataStatement#with_event}.

---

##### `WorkgroupName`<sup>Optional</sup> <a name="WorkgroupName" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.workgroupName"></a>

```csharp
public string WorkgroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshiftdata_statement#workgroup_name RedshiftdataStatement#workgroup_name}.

---

### RedshiftdataStatementParameters <a name="RedshiftdataStatementParameters" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new RedshiftdataStatementParameters {
    string Name,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParameters.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshiftdata_statement#name RedshiftdataStatement#name}. |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParameters.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshiftdata_statement#value RedshiftdataStatement#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParameters.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshiftdata_statement#name RedshiftdataStatement#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParameters.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshiftdata_statement#value RedshiftdataStatement#value}.

---

### RedshiftdataStatementTimeouts <a name="RedshiftdataStatementTimeouts" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new RedshiftdataStatementTimeouts {
    string Create = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshiftdata_statement#create RedshiftdataStatement#create}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshiftdata_statement#create RedshiftdataStatement#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### RedshiftdataStatementParametersList <a name="RedshiftdataStatementParametersList" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new RedshiftdataStatementParametersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersList.get"></a>

```csharp
private RedshiftdataStatementParametersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParameters">RedshiftdataStatementParameters</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersList.property.internalValue"></a>

```csharp
public IResolvable|RedshiftdataStatementParameters[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParameters">RedshiftdataStatementParameters</a>[]

---


### RedshiftdataStatementParametersOutputReference <a name="RedshiftdataStatementParametersOutputReference" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new RedshiftdataStatementParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParameters">RedshiftdataStatementParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RedshiftdataStatementParameters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementParameters">RedshiftdataStatementParameters</a>

---


### RedshiftdataStatementTimeoutsOutputReference <a name="RedshiftdataStatementTimeoutsOutputReference" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new RedshiftdataStatementTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeouts">RedshiftdataStatementTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RedshiftdataStatementTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeouts">RedshiftdataStatementTimeouts</a>

---




# `cloud9EnvironmentEc2` Submodule <a name="`cloud9EnvironmentEc2` Submodule" id="@cdktn/provider-aws.cloud9EnvironmentEc2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Cloud9EnvironmentEc2 <a name="Cloud9EnvironmentEc2" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/cloud9_environment_ec2 aws_cloud9_environment_ec2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Cloud9EnvironmentEc2(Construct Scope, string Id, Cloud9EnvironmentEc2Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config">Cloud9EnvironmentEc2Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config">Cloud9EnvironmentEc2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetAutomaticStopTimeMinutes">ResetAutomaticStopTimeMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetConnectionType">ResetConnectionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetOwnerArn">ResetOwnerArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetSubnetId">ResetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAutomaticStopTimeMinutes` <a name="ResetAutomaticStopTimeMinutes" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetAutomaticStopTimeMinutes"></a>

```csharp
private void ResetAutomaticStopTimeMinutes()
```

##### `ResetConnectionType` <a name="ResetConnectionType" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetConnectionType"></a>

```csharp
private void ResetConnectionType()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOwnerArn` <a name="ResetOwnerArn" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetOwnerArn"></a>

```csharp
private void ResetOwnerArn()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetSubnetId"></a>

```csharp
private void ResetSubnetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Cloud9EnvironmentEc2 resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Cloud9EnvironmentEc2.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Cloud9EnvironmentEc2.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Cloud9EnvironmentEc2.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Cloud9EnvironmentEc2.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Cloud9EnvironmentEc2 resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Cloud9EnvironmentEc2 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Cloud9EnvironmentEc2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/cloud9_environment_ec2#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Cloud9EnvironmentEc2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.automaticStopTimeMinutesInput">AutomaticStopTimeMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.connectionTypeInput">ConnectionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.imageIdInput">ImageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.ownerArnInput">OwnerArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.automaticStopTimeMinutes">AutomaticStopTimeMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.connectionType">ConnectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.imageId">ImageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.instanceType">InstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.ownerArn">OwnerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `AutomaticStopTimeMinutesInput`<sup>Optional</sup> <a name="AutomaticStopTimeMinutesInput" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.automaticStopTimeMinutesInput"></a>

```csharp
public double AutomaticStopTimeMinutesInput { get; }
```

- *Type:* double

---

##### `ConnectionTypeInput`<sup>Optional</sup> <a name="ConnectionTypeInput" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.connectionTypeInput"></a>

```csharp
public string ConnectionTypeInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ImageIdInput`<sup>Optional</sup> <a name="ImageIdInput" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.imageIdInput"></a>

```csharp
public string ImageIdInput { get; }
```

- *Type:* string

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.instanceTypeInput"></a>

```csharp
public string InstanceTypeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OwnerArnInput`<sup>Optional</sup> <a name="OwnerArnInput" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.ownerArnInput"></a>

```csharp
public string OwnerArnInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AutomaticStopTimeMinutes`<sup>Required</sup> <a name="AutomaticStopTimeMinutes" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.automaticStopTimeMinutes"></a>

```csharp
public double AutomaticStopTimeMinutes { get; }
```

- *Type:* double

---

##### `ConnectionType`<sup>Required</sup> <a name="ConnectionType" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.connectionType"></a>

```csharp
public string ConnectionType { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ImageId`<sup>Required</sup> <a name="ImageId" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.imageId"></a>

```csharp
public string ImageId { get; }
```

- *Type:* string

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.instanceType"></a>

```csharp
public string InstanceType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OwnerArn`<sup>Required</sup> <a name="OwnerArn" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.ownerArn"></a>

```csharp
public string OwnerArn { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Cloud9EnvironmentEc2Config <a name="Cloud9EnvironmentEc2Config" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Cloud9EnvironmentEc2Config {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ImageId,
    string InstanceType,
    string Name,
    double AutomaticStopTimeMinutes = null,
    string ConnectionType = null,
    string Description = null,
    string Id = null,
    string OwnerArn = null,
    string Region = null,
    string SubnetId = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.imageId">ImageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/cloud9_environment_ec2#image_id Cloud9EnvironmentEc2#image_id}. |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.instanceType">InstanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/cloud9_environment_ec2#instance_type Cloud9EnvironmentEc2#instance_type}. |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/cloud9_environment_ec2#name Cloud9EnvironmentEc2#name}. |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.automaticStopTimeMinutes">AutomaticStopTimeMinutes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/cloud9_environment_ec2#automatic_stop_time_minutes Cloud9EnvironmentEc2#automatic_stop_time_minutes}. |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.connectionType">ConnectionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/cloud9_environment_ec2#connection_type Cloud9EnvironmentEc2#connection_type}. |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/cloud9_environment_ec2#description Cloud9EnvironmentEc2#description}. |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/cloud9_environment_ec2#id Cloud9EnvironmentEc2#id}. |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.ownerArn">OwnerArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/cloud9_environment_ec2#owner_arn Cloud9EnvironmentEc2#owner_arn}. |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/cloud9_environment_ec2#subnet_id Cloud9EnvironmentEc2#subnet_id}. |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/cloud9_environment_ec2#tags Cloud9EnvironmentEc2#tags}. |
| <code><a href="#@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/cloud9_environment_ec2#tags_all Cloud9EnvironmentEc2#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ImageId`<sup>Required</sup> <a name="ImageId" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.imageId"></a>

```csharp
public string ImageId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/cloud9_environment_ec2#image_id Cloud9EnvironmentEc2#image_id}.

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.instanceType"></a>

```csharp
public string InstanceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/cloud9_environment_ec2#instance_type Cloud9EnvironmentEc2#instance_type}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/cloud9_environment_ec2#name Cloud9EnvironmentEc2#name}.

---

##### `AutomaticStopTimeMinutes`<sup>Optional</sup> <a name="AutomaticStopTimeMinutes" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.automaticStopTimeMinutes"></a>

```csharp
public double AutomaticStopTimeMinutes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/cloud9_environment_ec2#automatic_stop_time_minutes Cloud9EnvironmentEc2#automatic_stop_time_minutes}.

---

##### `ConnectionType`<sup>Optional</sup> <a name="ConnectionType" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.connectionType"></a>

```csharp
public string ConnectionType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/cloud9_environment_ec2#connection_type Cloud9EnvironmentEc2#connection_type}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/cloud9_environment_ec2#description Cloud9EnvironmentEc2#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/cloud9_environment_ec2#id Cloud9EnvironmentEc2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OwnerArn`<sup>Optional</sup> <a name="OwnerArn" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.ownerArn"></a>

```csharp
public string OwnerArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/cloud9_environment_ec2#owner_arn Cloud9EnvironmentEc2#owner_arn}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/cloud9_environment_ec2#region Cloud9EnvironmentEc2#region}

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/cloud9_environment_ec2#subnet_id Cloud9EnvironmentEc2#subnet_id}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/cloud9_environment_ec2#tags Cloud9EnvironmentEc2#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/cloud9_environment_ec2#tags_all Cloud9EnvironmentEc2#tags_all}.

---




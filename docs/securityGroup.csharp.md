# `securityGroup` Submodule <a name="`securityGroup` Submodule" id="@cdktn/provider-aws.securityGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityGroup <a name="SecurityGroup" id="@cdktn/provider-aws.securityGroup.SecurityGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/security_group aws_security_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityGroup.SecurityGroup.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SecurityGroup(Construct Scope, string Id, SecurityGroupConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupConfig">SecurityGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.securityGroup.SecurityGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.securityGroup.SecurityGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-aws.securityGroup.SecurityGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.securityGroup.SecurityGroupConfig">SecurityGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroup.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroup.putEgress">PutEgress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroup.putIngress">PutIngress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroup.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroup.resetEgress">ResetEgress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroup.resetIngress">ResetIngress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroup.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroup.resetNamePrefix">ResetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroup.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroup.resetRevokeRulesOnDelete">ResetRevokeRulesOnDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroup.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroup.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroup.resetVpcId">ResetVpcId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.securityGroup.SecurityGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.securityGroup.SecurityGroup.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.securityGroup.SecurityGroup.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.securityGroup.SecurityGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.securityGroup.SecurityGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.securityGroup.SecurityGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.securityGroup.SecurityGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.securityGroup.SecurityGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.securityGroup.SecurityGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.securityGroup.SecurityGroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.securityGroup.SecurityGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.securityGroup.SecurityGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.securityGroup.SecurityGroup.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.securityGroup.SecurityGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.securityGroup.SecurityGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityGroup.SecurityGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.securityGroup.SecurityGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityGroup.SecurityGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.securityGroup.SecurityGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityGroup.SecurityGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.securityGroup.SecurityGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityGroup.SecurityGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.securityGroup.SecurityGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityGroup.SecurityGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.securityGroup.SecurityGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityGroup.SecurityGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.securityGroup.SecurityGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityGroup.SecurityGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.securityGroup.SecurityGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityGroup.SecurityGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.securityGroup.SecurityGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityGroup.SecurityGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.securityGroup.SecurityGroup.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.securityGroup.SecurityGroup.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.securityGroup.SecurityGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.securityGroup.SecurityGroup.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.securityGroup.SecurityGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityGroup.SecurityGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.securityGroup.SecurityGroup.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.securityGroup.SecurityGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.securityGroup.SecurityGroup.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.securityGroup.SecurityGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.securityGroup.SecurityGroup.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.securityGroup.SecurityGroup.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.securityGroup.SecurityGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEgress` <a name="PutEgress" id="@cdktn/provider-aws.securityGroup.SecurityGroup.putEgress"></a>

```csharp
private void PutEgress(IResolvable|SecurityGroupEgress[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.securityGroup.SecurityGroup.putEgress.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.securityGroup.SecurityGroupEgress">SecurityGroupEgress</a>[]

---

##### `PutIngress` <a name="PutIngress" id="@cdktn/provider-aws.securityGroup.SecurityGroup.putIngress"></a>

```csharp
private void PutIngress(IResolvable|SecurityGroupIngress[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.securityGroup.SecurityGroup.putIngress.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.securityGroup.SecurityGroupIngress">SecurityGroupIngress</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.securityGroup.SecurityGroup.putTimeouts"></a>

```csharp
private void PutTimeouts(SecurityGroupTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.securityGroup.SecurityGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.securityGroup.SecurityGroupTimeouts">SecurityGroupTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-aws.securityGroup.SecurityGroup.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEgress` <a name="ResetEgress" id="@cdktn/provider-aws.securityGroup.SecurityGroup.resetEgress"></a>

```csharp
private void ResetEgress()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.securityGroup.SecurityGroup.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIngress` <a name="ResetIngress" id="@cdktn/provider-aws.securityGroup.SecurityGroup.resetIngress"></a>

```csharp
private void ResetIngress()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-aws.securityGroup.SecurityGroup.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNamePrefix` <a name="ResetNamePrefix" id="@cdktn/provider-aws.securityGroup.SecurityGroup.resetNamePrefix"></a>

```csharp
private void ResetNamePrefix()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.securityGroup.SecurityGroup.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetRevokeRulesOnDelete` <a name="ResetRevokeRulesOnDelete" id="@cdktn/provider-aws.securityGroup.SecurityGroup.resetRevokeRulesOnDelete"></a>

```csharp
private void ResetRevokeRulesOnDelete()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.securityGroup.SecurityGroup.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.securityGroup.SecurityGroup.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.securityGroup.SecurityGroup.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVpcId` <a name="ResetVpcId" id="@cdktn/provider-aws.securityGroup.SecurityGroup.resetVpcId"></a>

```csharp
private void ResetVpcId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SecurityGroup resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.securityGroup.SecurityGroup.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

SecurityGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.securityGroup.SecurityGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.securityGroup.SecurityGroup.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

SecurityGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.securityGroup.SecurityGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.securityGroup.SecurityGroup.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

SecurityGroup.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.securityGroup.SecurityGroup.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.securityGroup.SecurityGroup.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

SecurityGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SecurityGroup resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.securityGroup.SecurityGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.securityGroup.SecurityGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecurityGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.securityGroup.SecurityGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecurityGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/security_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.securityGroup.SecurityGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SecurityGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroup.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroup.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroup.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroup.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroup.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroup.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroup.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroup.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroup.property.egress">Egress</a></code> | <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupEgressList">SecurityGroupEgressList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroup.property.ingress">Ingress</a></code> | <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupIngressList">SecurityGroupIngressList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroup.property.ownerId">OwnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroup.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference">SecurityGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroup.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroup.property.egressInput">EgressInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.securityGroup.SecurityGroupEgress">SecurityGroupEgress</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroup.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroup.property.ingressInput">IngressInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.securityGroup.SecurityGroupIngress">SecurityGroupIngress</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroup.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroup.property.namePrefixInput">NamePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroup.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroup.property.revokeRulesOnDeleteInput">RevokeRulesOnDeleteInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroup.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroup.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroup.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.securityGroup.SecurityGroupTimeouts">SecurityGroupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroup.property.vpcIdInput">VpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroup.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroup.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroup.property.namePrefix">NamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroup.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroup.property.revokeRulesOnDelete">RevokeRulesOnDelete</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroup.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroup.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroup.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.securityGroup.SecurityGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.securityGroup.SecurityGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.securityGroup.SecurityGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.securityGroup.SecurityGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.securityGroup.SecurityGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.securityGroup.SecurityGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.securityGroup.SecurityGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.securityGroup.SecurityGroup.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.securityGroup.SecurityGroup.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.securityGroup.SecurityGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.securityGroup.SecurityGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.securityGroup.SecurityGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.securityGroup.SecurityGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.securityGroup.SecurityGroup.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.securityGroup.SecurityGroup.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Egress`<sup>Required</sup> <a name="Egress" id="@cdktn/provider-aws.securityGroup.SecurityGroup.property.egress"></a>

```csharp
public SecurityGroupEgressList Egress { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.securityGroup.SecurityGroupEgressList">SecurityGroupEgressList</a>

---

##### `Ingress`<sup>Required</sup> <a name="Ingress" id="@cdktn/provider-aws.securityGroup.SecurityGroup.property.ingress"></a>

```csharp
public SecurityGroupIngressList Ingress { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.securityGroup.SecurityGroupIngressList">SecurityGroupIngressList</a>

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktn/provider-aws.securityGroup.SecurityGroup.property.ownerId"></a>

```csharp
public string OwnerId { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.securityGroup.SecurityGroup.property.timeouts"></a>

```csharp
public SecurityGroupTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference">SecurityGroupTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-aws.securityGroup.SecurityGroup.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EgressInput`<sup>Optional</sup> <a name="EgressInput" id="@cdktn/provider-aws.securityGroup.SecurityGroup.property.egressInput"></a>

```csharp
public IResolvable|SecurityGroupEgress[] EgressInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.securityGroup.SecurityGroupEgress">SecurityGroupEgress</a>[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.securityGroup.SecurityGroup.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IngressInput`<sup>Optional</sup> <a name="IngressInput" id="@cdktn/provider-aws.securityGroup.SecurityGroup.property.ingressInput"></a>

```csharp
public IResolvable|SecurityGroupIngress[] IngressInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.securityGroup.SecurityGroupIngress">SecurityGroupIngress</a>[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.securityGroup.SecurityGroup.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamePrefixInput`<sup>Optional</sup> <a name="NamePrefixInput" id="@cdktn/provider-aws.securityGroup.SecurityGroup.property.namePrefixInput"></a>

```csharp
public string NamePrefixInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.securityGroup.SecurityGroup.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RevokeRulesOnDeleteInput`<sup>Optional</sup> <a name="RevokeRulesOnDeleteInput" id="@cdktn/provider-aws.securityGroup.SecurityGroup.property.revokeRulesOnDeleteInput"></a>

```csharp
public bool|IResolvable RevokeRulesOnDeleteInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.securityGroup.SecurityGroup.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.securityGroup.SecurityGroup.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.securityGroup.SecurityGroup.property.timeoutsInput"></a>

```csharp
public IResolvable|SecurityGroupTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.securityGroup.SecurityGroupTimeouts">SecurityGroupTimeouts</a>

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktn/provider-aws.securityGroup.SecurityGroup.property.vpcIdInput"></a>

```csharp
public string VpcIdInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.securityGroup.SecurityGroup.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.securityGroup.SecurityGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.securityGroup.SecurityGroup.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NamePrefix`<sup>Required</sup> <a name="NamePrefix" id="@cdktn/provider-aws.securityGroup.SecurityGroup.property.namePrefix"></a>

```csharp
public string NamePrefix { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.securityGroup.SecurityGroup.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `RevokeRulesOnDelete`<sup>Required</sup> <a name="RevokeRulesOnDelete" id="@cdktn/provider-aws.securityGroup.SecurityGroup.property.revokeRulesOnDelete"></a>

```csharp
public bool|IResolvable RevokeRulesOnDelete { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.securityGroup.SecurityGroup.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.securityGroup.SecurityGroup.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-aws.securityGroup.SecurityGroup.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.securityGroup.SecurityGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityGroupConfig <a name="SecurityGroupConfig" id="@cdktn/provider-aws.securityGroup.SecurityGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.securityGroup.SecurityGroupConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SecurityGroupConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Description = null,
    IResolvable|SecurityGroupEgress[] Egress = null,
    string Id = null,
    IResolvable|SecurityGroupIngress[] Ingress = null,
    string Name = null,
    string NamePrefix = null,
    string Region = null,
    bool|IResolvable RevokeRulesOnDelete = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    SecurityGroupTimeouts Timeouts = null,
    string VpcId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/security_group#description SecurityGroup#description}. |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupConfig.property.egress">Egress</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.securityGroup.SecurityGroupEgress">SecurityGroupEgress</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/security_group#egress SecurityGroup#egress}. |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/security_group#id SecurityGroup#id}. |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupConfig.property.ingress">Ingress</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.securityGroup.SecurityGroupIngress">SecurityGroupIngress</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/security_group#ingress SecurityGroup#ingress}. |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/security_group#name SecurityGroup#name}. |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupConfig.property.namePrefix">NamePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/security_group#name_prefix SecurityGroup#name_prefix}. |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupConfig.property.revokeRulesOnDelete">RevokeRulesOnDelete</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/security_group#revoke_rules_on_delete SecurityGroup#revoke_rules_on_delete}. |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/security_group#tags SecurityGroup#tags}. |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/security_group#tags_all SecurityGroup#tags_all}. |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupTimeouts">SecurityGroupTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupConfig.property.vpcId">VpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/security_group#vpc_id SecurityGroup#vpc_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.securityGroup.SecurityGroupConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.securityGroup.SecurityGroupConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.securityGroup.SecurityGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.securityGroup.SecurityGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.securityGroup.SecurityGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.securityGroup.SecurityGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.securityGroup.SecurityGroupConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-aws.securityGroup.SecurityGroupConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/security_group#description SecurityGroup#description}.

---

##### `Egress`<sup>Optional</sup> <a name="Egress" id="@cdktn/provider-aws.securityGroup.SecurityGroupConfig.property.egress"></a>

```csharp
public IResolvable|SecurityGroupEgress[] Egress { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.securityGroup.SecurityGroupEgress">SecurityGroupEgress</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/security_group#egress SecurityGroup#egress}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.securityGroup.SecurityGroupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/security_group#id SecurityGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Ingress`<sup>Optional</sup> <a name="Ingress" id="@cdktn/provider-aws.securityGroup.SecurityGroupConfig.property.ingress"></a>

```csharp
public IResolvable|SecurityGroupIngress[] Ingress { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.securityGroup.SecurityGroupIngress">SecurityGroupIngress</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/security_group#ingress SecurityGroup#ingress}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-aws.securityGroup.SecurityGroupConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/security_group#name SecurityGroup#name}.

---

##### `NamePrefix`<sup>Optional</sup> <a name="NamePrefix" id="@cdktn/provider-aws.securityGroup.SecurityGroupConfig.property.namePrefix"></a>

```csharp
public string NamePrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/security_group#name_prefix SecurityGroup#name_prefix}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.securityGroup.SecurityGroupConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/security_group#region SecurityGroup#region}

---

##### `RevokeRulesOnDelete`<sup>Optional</sup> <a name="RevokeRulesOnDelete" id="@cdktn/provider-aws.securityGroup.SecurityGroupConfig.property.revokeRulesOnDelete"></a>

```csharp
public bool|IResolvable RevokeRulesOnDelete { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/security_group#revoke_rules_on_delete SecurityGroup#revoke_rules_on_delete}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.securityGroup.SecurityGroupConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/security_group#tags SecurityGroup#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.securityGroup.SecurityGroupConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/security_group#tags_all SecurityGroup#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.securityGroup.SecurityGroupConfig.property.timeouts"></a>

```csharp
public SecurityGroupTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.securityGroup.SecurityGroupTimeouts">SecurityGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/security_group#timeouts SecurityGroup#timeouts}

---

##### `VpcId`<sup>Optional</sup> <a name="VpcId" id="@cdktn/provider-aws.securityGroup.SecurityGroupConfig.property.vpcId"></a>

```csharp
public string VpcId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/security_group#vpc_id SecurityGroup#vpc_id}.

---

### SecurityGroupEgress <a name="SecurityGroupEgress" id="@cdktn/provider-aws.securityGroup.SecurityGroupEgress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.securityGroup.SecurityGroupEgress.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SecurityGroupEgress {
    string[] CidrBlocks = null,
    string Description = null,
    double FromPort = null,
    string[] Ipv6CidrBlocks = null,
    string[] PrefixListIds = null,
    string Protocol = null,
    string[] SecurityGroups = null,
    bool|IResolvable SelfAttribute = null,
    double ToPort = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupEgress.property.cidrBlocks">CidrBlocks</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/security_group#cidr_blocks SecurityGroup#cidr_blocks}. |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupEgress.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/security_group#description SecurityGroup#description}. |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupEgress.property.fromPort">FromPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/security_group#from_port SecurityGroup#from_port}. |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupEgress.property.ipv6CidrBlocks">Ipv6CidrBlocks</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/security_group#ipv6_cidr_blocks SecurityGroup#ipv6_cidr_blocks}. |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupEgress.property.prefixListIds">PrefixListIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/security_group#prefix_list_ids SecurityGroup#prefix_list_ids}. |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupEgress.property.protocol">Protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/security_group#protocol SecurityGroup#protocol}. |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupEgress.property.securityGroups">SecurityGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/security_group#security_groups SecurityGroup#security_groups}. |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupEgress.property.selfAttribute">SelfAttribute</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/security_group#self SecurityGroup#self}. |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupEgress.property.toPort">ToPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/security_group#to_port SecurityGroup#to_port}. |

---

##### `CidrBlocks`<sup>Optional</sup> <a name="CidrBlocks" id="@cdktn/provider-aws.securityGroup.SecurityGroupEgress.property.cidrBlocks"></a>

```csharp
public string[] CidrBlocks { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/security_group#cidr_blocks SecurityGroup#cidr_blocks}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-aws.securityGroup.SecurityGroupEgress.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/security_group#description SecurityGroup#description}.

---

##### `FromPort`<sup>Optional</sup> <a name="FromPort" id="@cdktn/provider-aws.securityGroup.SecurityGroupEgress.property.fromPort"></a>

```csharp
public double FromPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/security_group#from_port SecurityGroup#from_port}.

---

##### `Ipv6CidrBlocks`<sup>Optional</sup> <a name="Ipv6CidrBlocks" id="@cdktn/provider-aws.securityGroup.SecurityGroupEgress.property.ipv6CidrBlocks"></a>

```csharp
public string[] Ipv6CidrBlocks { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/security_group#ipv6_cidr_blocks SecurityGroup#ipv6_cidr_blocks}.

---

##### `PrefixListIds`<sup>Optional</sup> <a name="PrefixListIds" id="@cdktn/provider-aws.securityGroup.SecurityGroupEgress.property.prefixListIds"></a>

```csharp
public string[] PrefixListIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/security_group#prefix_list_ids SecurityGroup#prefix_list_ids}.

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktn/provider-aws.securityGroup.SecurityGroupEgress.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/security_group#protocol SecurityGroup#protocol}.

---

##### `SecurityGroups`<sup>Optional</sup> <a name="SecurityGroups" id="@cdktn/provider-aws.securityGroup.SecurityGroupEgress.property.securityGroups"></a>

```csharp
public string[] SecurityGroups { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/security_group#security_groups SecurityGroup#security_groups}.

---

##### `SelfAttribute`<sup>Optional</sup> <a name="SelfAttribute" id="@cdktn/provider-aws.securityGroup.SecurityGroupEgress.property.selfAttribute"></a>

```csharp
public bool|IResolvable SelfAttribute { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/security_group#self SecurityGroup#self}.

---

##### `ToPort`<sup>Optional</sup> <a name="ToPort" id="@cdktn/provider-aws.securityGroup.SecurityGroupEgress.property.toPort"></a>

```csharp
public double ToPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/security_group#to_port SecurityGroup#to_port}.

---

### SecurityGroupIngress <a name="SecurityGroupIngress" id="@cdktn/provider-aws.securityGroup.SecurityGroupIngress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.securityGroup.SecurityGroupIngress.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SecurityGroupIngress {
    string[] CidrBlocks = null,
    string Description = null,
    double FromPort = null,
    string[] Ipv6CidrBlocks = null,
    string[] PrefixListIds = null,
    string Protocol = null,
    string[] SecurityGroups = null,
    bool|IResolvable SelfAttribute = null,
    double ToPort = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupIngress.property.cidrBlocks">CidrBlocks</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/security_group#cidr_blocks SecurityGroup#cidr_blocks}. |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupIngress.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/security_group#description SecurityGroup#description}. |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupIngress.property.fromPort">FromPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/security_group#from_port SecurityGroup#from_port}. |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupIngress.property.ipv6CidrBlocks">Ipv6CidrBlocks</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/security_group#ipv6_cidr_blocks SecurityGroup#ipv6_cidr_blocks}. |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupIngress.property.prefixListIds">PrefixListIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/security_group#prefix_list_ids SecurityGroup#prefix_list_ids}. |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupIngress.property.protocol">Protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/security_group#protocol SecurityGroup#protocol}. |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupIngress.property.securityGroups">SecurityGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/security_group#security_groups SecurityGroup#security_groups}. |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupIngress.property.selfAttribute">SelfAttribute</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/security_group#self SecurityGroup#self}. |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupIngress.property.toPort">ToPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/security_group#to_port SecurityGroup#to_port}. |

---

##### `CidrBlocks`<sup>Optional</sup> <a name="CidrBlocks" id="@cdktn/provider-aws.securityGroup.SecurityGroupIngress.property.cidrBlocks"></a>

```csharp
public string[] CidrBlocks { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/security_group#cidr_blocks SecurityGroup#cidr_blocks}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-aws.securityGroup.SecurityGroupIngress.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/security_group#description SecurityGroup#description}.

---

##### `FromPort`<sup>Optional</sup> <a name="FromPort" id="@cdktn/provider-aws.securityGroup.SecurityGroupIngress.property.fromPort"></a>

```csharp
public double FromPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/security_group#from_port SecurityGroup#from_port}.

---

##### `Ipv6CidrBlocks`<sup>Optional</sup> <a name="Ipv6CidrBlocks" id="@cdktn/provider-aws.securityGroup.SecurityGroupIngress.property.ipv6CidrBlocks"></a>

```csharp
public string[] Ipv6CidrBlocks { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/security_group#ipv6_cidr_blocks SecurityGroup#ipv6_cidr_blocks}.

---

##### `PrefixListIds`<sup>Optional</sup> <a name="PrefixListIds" id="@cdktn/provider-aws.securityGroup.SecurityGroupIngress.property.prefixListIds"></a>

```csharp
public string[] PrefixListIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/security_group#prefix_list_ids SecurityGroup#prefix_list_ids}.

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktn/provider-aws.securityGroup.SecurityGroupIngress.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/security_group#protocol SecurityGroup#protocol}.

---

##### `SecurityGroups`<sup>Optional</sup> <a name="SecurityGroups" id="@cdktn/provider-aws.securityGroup.SecurityGroupIngress.property.securityGroups"></a>

```csharp
public string[] SecurityGroups { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/security_group#security_groups SecurityGroup#security_groups}.

---

##### `SelfAttribute`<sup>Optional</sup> <a name="SelfAttribute" id="@cdktn/provider-aws.securityGroup.SecurityGroupIngress.property.selfAttribute"></a>

```csharp
public bool|IResolvable SelfAttribute { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/security_group#self SecurityGroup#self}.

---

##### `ToPort`<sup>Optional</sup> <a name="ToPort" id="@cdktn/provider-aws.securityGroup.SecurityGroupIngress.property.toPort"></a>

```csharp
public double ToPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/security_group#to_port SecurityGroup#to_port}.

---

### SecurityGroupTimeouts <a name="SecurityGroupTimeouts" id="@cdktn/provider-aws.securityGroup.SecurityGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.securityGroup.SecurityGroupTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SecurityGroupTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/security_group#create SecurityGroup#create}. |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/security_group#delete SecurityGroup#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.securityGroup.SecurityGroupTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/security_group#create SecurityGroup#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.securityGroup.SecurityGroupTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/security_group#delete SecurityGroup#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityGroupEgressList <a name="SecurityGroupEgressList" id="@cdktn/provider-aws.securityGroup.SecurityGroupEgressList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityGroup.SecurityGroupEgressList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SecurityGroupEgressList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupEgressList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupEgressList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupEgressList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.securityGroup.SecurityGroupEgressList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityGroup.SecurityGroupEgressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.securityGroup.SecurityGroupEgressList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupEgressList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupEgressList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupEgressList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupEgressList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupEgressList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.securityGroup.SecurityGroupEgressList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.securityGroup.SecurityGroupEgressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.securityGroup.SecurityGroupEgressList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.securityGroup.SecurityGroupEgressList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.securityGroup.SecurityGroupEgressList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.securityGroup.SecurityGroupEgressList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.securityGroup.SecurityGroupEgressList.get"></a>

```csharp
private SecurityGroupEgressOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.securityGroup.SecurityGroupEgressList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupEgressList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupEgressList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupEgressList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.securityGroup.SecurityGroupEgress">SecurityGroupEgress</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.securityGroup.SecurityGroupEgressList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.securityGroup.SecurityGroupEgressList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.securityGroup.SecurityGroupEgressList.property.internalValue"></a>

```csharp
public IResolvable|SecurityGroupEgress[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.securityGroup.SecurityGroupEgress">SecurityGroupEgress</a>[]

---


### SecurityGroupEgressOutputReference <a name="SecurityGroupEgressOutputReference" id="@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SecurityGroupEgressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.resetCidrBlocks">ResetCidrBlocks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.resetFromPort">ResetFromPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.resetIpv6CidrBlocks">ResetIpv6CidrBlocks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.resetPrefixListIds">ResetPrefixListIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.resetSecurityGroups">ResetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.resetSelfAttribute">ResetSelfAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.resetToPort">ResetToPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCidrBlocks` <a name="ResetCidrBlocks" id="@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.resetCidrBlocks"></a>

```csharp
private void ResetCidrBlocks()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFromPort` <a name="ResetFromPort" id="@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.resetFromPort"></a>

```csharp
private void ResetFromPort()
```

##### `ResetIpv6CidrBlocks` <a name="ResetIpv6CidrBlocks" id="@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.resetIpv6CidrBlocks"></a>

```csharp
private void ResetIpv6CidrBlocks()
```

##### `ResetPrefixListIds` <a name="ResetPrefixListIds" id="@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.resetPrefixListIds"></a>

```csharp
private void ResetPrefixListIds()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.resetProtocol"></a>

```csharp
private void ResetProtocol()
```

##### `ResetSecurityGroups` <a name="ResetSecurityGroups" id="@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.resetSecurityGroups"></a>

```csharp
private void ResetSecurityGroups()
```

##### `ResetSelfAttribute` <a name="ResetSelfAttribute" id="@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.resetSelfAttribute"></a>

```csharp
private void ResetSelfAttribute()
```

##### `ResetToPort` <a name="ResetToPort" id="@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.resetToPort"></a>

```csharp
private void ResetToPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.cidrBlocksInput">CidrBlocksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.fromPortInput">FromPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.ipv6CidrBlocksInput">Ipv6CidrBlocksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.prefixListIdsInput">PrefixListIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.securityGroupsInput">SecurityGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.selfAttributeInput">SelfAttributeInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.toPortInput">ToPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.cidrBlocks">CidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.fromPort">FromPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.ipv6CidrBlocks">Ipv6CidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.prefixListIds">PrefixListIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.securityGroups">SecurityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.selfAttribute">SelfAttribute</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.toPort">ToPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.securityGroup.SecurityGroupEgress">SecurityGroupEgress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CidrBlocksInput`<sup>Optional</sup> <a name="CidrBlocksInput" id="@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.cidrBlocksInput"></a>

```csharp
public string[] CidrBlocksInput { get; }
```

- *Type:* string[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FromPortInput`<sup>Optional</sup> <a name="FromPortInput" id="@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.fromPortInput"></a>

```csharp
public double FromPortInput { get; }
```

- *Type:* double

---

##### `Ipv6CidrBlocksInput`<sup>Optional</sup> <a name="Ipv6CidrBlocksInput" id="@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.ipv6CidrBlocksInput"></a>

```csharp
public string[] Ipv6CidrBlocksInput { get; }
```

- *Type:* string[]

---

##### `PrefixListIdsInput`<sup>Optional</sup> <a name="PrefixListIdsInput" id="@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.prefixListIdsInput"></a>

```csharp
public string[] PrefixListIdsInput { get; }
```

- *Type:* string[]

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `SecurityGroupsInput`<sup>Optional</sup> <a name="SecurityGroupsInput" id="@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.securityGroupsInput"></a>

```csharp
public string[] SecurityGroupsInput { get; }
```

- *Type:* string[]

---

##### `SelfAttributeInput`<sup>Optional</sup> <a name="SelfAttributeInput" id="@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.selfAttributeInput"></a>

```csharp
public bool|IResolvable SelfAttributeInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ToPortInput`<sup>Optional</sup> <a name="ToPortInput" id="@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.toPortInput"></a>

```csharp
public double ToPortInput { get; }
```

- *Type:* double

---

##### `CidrBlocks`<sup>Required</sup> <a name="CidrBlocks" id="@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.cidrBlocks"></a>

```csharp
public string[] CidrBlocks { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.fromPort"></a>

```csharp
public double FromPort { get; }
```

- *Type:* double

---

##### `Ipv6CidrBlocks`<sup>Required</sup> <a name="Ipv6CidrBlocks" id="@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.ipv6CidrBlocks"></a>

```csharp
public string[] Ipv6CidrBlocks { get; }
```

- *Type:* string[]

---

##### `PrefixListIds`<sup>Required</sup> <a name="PrefixListIds" id="@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.prefixListIds"></a>

```csharp
public string[] PrefixListIds { get; }
```

- *Type:* string[]

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.securityGroups"></a>

```csharp
public string[] SecurityGroups { get; }
```

- *Type:* string[]

---

##### `SelfAttribute`<sup>Required</sup> <a name="SelfAttribute" id="@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.selfAttribute"></a>

```csharp
public bool|IResolvable SelfAttribute { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.toPort"></a>

```csharp
public double ToPort { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecurityGroupEgress InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.securityGroup.SecurityGroupEgress">SecurityGroupEgress</a>

---


### SecurityGroupIngressList <a name="SecurityGroupIngressList" id="@cdktn/provider-aws.securityGroup.SecurityGroupIngressList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityGroup.SecurityGroupIngressList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SecurityGroupIngressList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupIngressList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupIngressList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupIngressList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.securityGroup.SecurityGroupIngressList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityGroup.SecurityGroupIngressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.securityGroup.SecurityGroupIngressList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupIngressList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupIngressList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupIngressList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupIngressList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupIngressList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.securityGroup.SecurityGroupIngressList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.securityGroup.SecurityGroupIngressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.securityGroup.SecurityGroupIngressList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.securityGroup.SecurityGroupIngressList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.securityGroup.SecurityGroupIngressList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.securityGroup.SecurityGroupIngressList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.securityGroup.SecurityGroupIngressList.get"></a>

```csharp
private SecurityGroupIngressOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.securityGroup.SecurityGroupIngressList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupIngressList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupIngressList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupIngressList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.securityGroup.SecurityGroupIngress">SecurityGroupIngress</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.securityGroup.SecurityGroupIngressList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.securityGroup.SecurityGroupIngressList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.securityGroup.SecurityGroupIngressList.property.internalValue"></a>

```csharp
public IResolvable|SecurityGroupIngress[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.securityGroup.SecurityGroupIngress">SecurityGroupIngress</a>[]

---


### SecurityGroupIngressOutputReference <a name="SecurityGroupIngressOutputReference" id="@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SecurityGroupIngressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.resetCidrBlocks">ResetCidrBlocks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.resetFromPort">ResetFromPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.resetIpv6CidrBlocks">ResetIpv6CidrBlocks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.resetPrefixListIds">ResetPrefixListIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.resetSecurityGroups">ResetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.resetSelfAttribute">ResetSelfAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.resetToPort">ResetToPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCidrBlocks` <a name="ResetCidrBlocks" id="@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.resetCidrBlocks"></a>

```csharp
private void ResetCidrBlocks()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFromPort` <a name="ResetFromPort" id="@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.resetFromPort"></a>

```csharp
private void ResetFromPort()
```

##### `ResetIpv6CidrBlocks` <a name="ResetIpv6CidrBlocks" id="@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.resetIpv6CidrBlocks"></a>

```csharp
private void ResetIpv6CidrBlocks()
```

##### `ResetPrefixListIds` <a name="ResetPrefixListIds" id="@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.resetPrefixListIds"></a>

```csharp
private void ResetPrefixListIds()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.resetProtocol"></a>

```csharp
private void ResetProtocol()
```

##### `ResetSecurityGroups` <a name="ResetSecurityGroups" id="@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.resetSecurityGroups"></a>

```csharp
private void ResetSecurityGroups()
```

##### `ResetSelfAttribute` <a name="ResetSelfAttribute" id="@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.resetSelfAttribute"></a>

```csharp
private void ResetSelfAttribute()
```

##### `ResetToPort` <a name="ResetToPort" id="@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.resetToPort"></a>

```csharp
private void ResetToPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.cidrBlocksInput">CidrBlocksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.fromPortInput">FromPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.ipv6CidrBlocksInput">Ipv6CidrBlocksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.prefixListIdsInput">PrefixListIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.securityGroupsInput">SecurityGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.selfAttributeInput">SelfAttributeInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.toPortInput">ToPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.cidrBlocks">CidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.fromPort">FromPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.ipv6CidrBlocks">Ipv6CidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.prefixListIds">PrefixListIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.securityGroups">SecurityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.selfAttribute">SelfAttribute</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.toPort">ToPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.securityGroup.SecurityGroupIngress">SecurityGroupIngress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CidrBlocksInput`<sup>Optional</sup> <a name="CidrBlocksInput" id="@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.cidrBlocksInput"></a>

```csharp
public string[] CidrBlocksInput { get; }
```

- *Type:* string[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FromPortInput`<sup>Optional</sup> <a name="FromPortInput" id="@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.fromPortInput"></a>

```csharp
public double FromPortInput { get; }
```

- *Type:* double

---

##### `Ipv6CidrBlocksInput`<sup>Optional</sup> <a name="Ipv6CidrBlocksInput" id="@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.ipv6CidrBlocksInput"></a>

```csharp
public string[] Ipv6CidrBlocksInput { get; }
```

- *Type:* string[]

---

##### `PrefixListIdsInput`<sup>Optional</sup> <a name="PrefixListIdsInput" id="@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.prefixListIdsInput"></a>

```csharp
public string[] PrefixListIdsInput { get; }
```

- *Type:* string[]

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `SecurityGroupsInput`<sup>Optional</sup> <a name="SecurityGroupsInput" id="@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.securityGroupsInput"></a>

```csharp
public string[] SecurityGroupsInput { get; }
```

- *Type:* string[]

---

##### `SelfAttributeInput`<sup>Optional</sup> <a name="SelfAttributeInput" id="@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.selfAttributeInput"></a>

```csharp
public bool|IResolvable SelfAttributeInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ToPortInput`<sup>Optional</sup> <a name="ToPortInput" id="@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.toPortInput"></a>

```csharp
public double ToPortInput { get; }
```

- *Type:* double

---

##### `CidrBlocks`<sup>Required</sup> <a name="CidrBlocks" id="@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.cidrBlocks"></a>

```csharp
public string[] CidrBlocks { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.fromPort"></a>

```csharp
public double FromPort { get; }
```

- *Type:* double

---

##### `Ipv6CidrBlocks`<sup>Required</sup> <a name="Ipv6CidrBlocks" id="@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.ipv6CidrBlocks"></a>

```csharp
public string[] Ipv6CidrBlocks { get; }
```

- *Type:* string[]

---

##### `PrefixListIds`<sup>Required</sup> <a name="PrefixListIds" id="@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.prefixListIds"></a>

```csharp
public string[] PrefixListIds { get; }
```

- *Type:* string[]

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.securityGroups"></a>

```csharp
public string[] SecurityGroups { get; }
```

- *Type:* string[]

---

##### `SelfAttribute`<sup>Required</sup> <a name="SelfAttribute" id="@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.selfAttribute"></a>

```csharp
public bool|IResolvable SelfAttribute { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.toPort"></a>

```csharp
public double ToPort { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecurityGroupIngress InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.securityGroup.SecurityGroupIngress">SecurityGroupIngress</a>

---


### SecurityGroupTimeoutsOutputReference <a name="SecurityGroupTimeoutsOutputReference" id="@cdktn/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SecurityGroupTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.securityGroup.SecurityGroupTimeouts">SecurityGroupTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecurityGroupTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.securityGroup.SecurityGroupTimeouts">SecurityGroupTimeouts</a>

---




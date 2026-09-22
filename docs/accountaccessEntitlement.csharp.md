# `accountaccessEntitlement` Submodule <a name="`accountaccessEntitlement` Submodule" id="@cdktn/provider-aws.accountaccessEntitlement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccountaccessEntitlement <a name="AccountaccessEntitlement" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/accountaccess_entitlement aws_accountaccess_entitlement}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AccountaccessEntitlement(Construct Scope, string Id, AccountaccessEntitlementConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementConfig">AccountaccessEntitlementConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementConfig">AccountaccessEntitlementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.putEntitlement">PutEntitlement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.resetEntitlement">ResetEntitlement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEntitlement` <a name="PutEntitlement" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.putEntitlement"></a>

```csharp
private void PutEntitlement(IResolvable|AccountaccessEntitlementEntitlement[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.putEntitlement.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlement">AccountaccessEntitlementEntitlement</a>[]

---

##### `ResetEntitlement` <a name="ResetEntitlement" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.resetEntitlement"></a>

```csharp
private void ResetEntitlement()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AccountaccessEntitlement resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

AccountaccessEntitlement.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

AccountaccessEntitlement.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

AccountaccessEntitlement.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

AccountaccessEntitlement.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a AccountaccessEntitlement resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AccountaccessEntitlement to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AccountaccessEntitlement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/accountaccess_entitlement#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the AccountaccessEntitlement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.entitlement">Entitlement</a></code> | <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementList">AccountaccessEntitlementEntitlementList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.entitlementId">EntitlementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.applicationArnInput">ApplicationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.entitlementInput">EntitlementInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlement">AccountaccessEntitlementEntitlement</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.applicationArn">ApplicationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Entitlement`<sup>Required</sup> <a name="Entitlement" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.entitlement"></a>

```csharp
public AccountaccessEntitlementEntitlementList Entitlement { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementList">AccountaccessEntitlementEntitlementList</a>

---

##### `EntitlementId`<sup>Required</sup> <a name="EntitlementId" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.entitlementId"></a>

```csharp
public string EntitlementId { get; }
```

- *Type:* string

---

##### `ApplicationArnInput`<sup>Optional</sup> <a name="ApplicationArnInput" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.applicationArnInput"></a>

```csharp
public string ApplicationArnInput { get; }
```

- *Type:* string

---

##### `EntitlementInput`<sup>Optional</sup> <a name="EntitlementInput" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.entitlementInput"></a>

```csharp
public IResolvable|AccountaccessEntitlementEntitlement[] EntitlementInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlement">AccountaccessEntitlementEntitlement</a>[]

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ApplicationArn`<sup>Required</sup> <a name="ApplicationArn" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.applicationArn"></a>

```csharp
public string ApplicationArn { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlement.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AccountaccessEntitlementConfig <a name="AccountaccessEntitlementConfig" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AccountaccessEntitlementConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ApplicationArn,
    IResolvable|AccountaccessEntitlementEntitlement[] Entitlement = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementConfig.property.applicationArn">ApplicationArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/accountaccess_entitlement#application_arn AccountaccessEntitlement#application_arn}. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementConfig.property.entitlement">Entitlement</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlement">AccountaccessEntitlementEntitlement</a>[]</code> | entitlement block. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ApplicationArn`<sup>Required</sup> <a name="ApplicationArn" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementConfig.property.applicationArn"></a>

```csharp
public string ApplicationArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/accountaccess_entitlement#application_arn AccountaccessEntitlement#application_arn}.

---

##### `Entitlement`<sup>Optional</sup> <a name="Entitlement" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementConfig.property.entitlement"></a>

```csharp
public IResolvable|AccountaccessEntitlementEntitlement[] Entitlement { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlement">AccountaccessEntitlementEntitlement</a>[]

entitlement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/accountaccess_entitlement#entitlement AccountaccessEntitlement#entitlement}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/accountaccess_entitlement#region AccountaccessEntitlement#region}

---

### AccountaccessEntitlementEntitlement <a name="AccountaccessEntitlementEntitlement" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlement.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AccountaccessEntitlementEntitlement {
    IResolvable|AccountaccessEntitlementEntitlementPrincipalRole[] PrincipalRole = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlement.property.principalRole">PrincipalRole</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRole">AccountaccessEntitlementEntitlementPrincipalRole</a>[]</code> | principal_role block. |

---

##### `PrincipalRole`<sup>Optional</sup> <a name="PrincipalRole" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlement.property.principalRole"></a>

```csharp
public IResolvable|AccountaccessEntitlementEntitlementPrincipalRole[] PrincipalRole { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRole">AccountaccessEntitlementEntitlementPrincipalRole</a>[]

principal_role block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/accountaccess_entitlement#principal_role AccountaccessEntitlement#principal_role}

---

### AccountaccessEntitlementEntitlementPrincipalRole <a name="AccountaccessEntitlementEntitlementPrincipalRole" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRole"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRole.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AccountaccessEntitlementEntitlementPrincipalRole {
    string RoleArn,
    IResolvable|AccountaccessEntitlementEntitlementPrincipalRolePrincipal[] Principal = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRole.property.roleArn">RoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/accountaccess_entitlement#role_arn AccountaccessEntitlement#role_arn}. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRole.property.principal">Principal</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipal">AccountaccessEntitlementEntitlementPrincipalRolePrincipal</a>[]</code> | principal block. |

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRole.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/accountaccess_entitlement#role_arn AccountaccessEntitlement#role_arn}.

---

##### `Principal`<sup>Optional</sup> <a name="Principal" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRole.property.principal"></a>

```csharp
public IResolvable|AccountaccessEntitlementEntitlementPrincipalRolePrincipal[] Principal { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipal">AccountaccessEntitlementEntitlementPrincipalRolePrincipal</a>[]

principal block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/accountaccess_entitlement#principal AccountaccessEntitlement#principal}

---

### AccountaccessEntitlementEntitlementPrincipalRolePrincipal <a name="AccountaccessEntitlementEntitlementPrincipalRolePrincipal" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipal.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AccountaccessEntitlementEntitlementPrincipalRolePrincipal {
    IResolvable|AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter[] IdentityCenter = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipal.property.identityCenter">IdentityCenter</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter">AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter</a>[]</code> | identity_center block. |

---

##### `IdentityCenter`<sup>Optional</sup> <a name="IdentityCenter" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipal.property.identityCenter"></a>

```csharp
public IResolvable|AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter[] IdentityCenter { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter">AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter</a>[]

identity_center block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/accountaccess_entitlement#identity_center AccountaccessEntitlement#identity_center}

---

### AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter <a name="AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter {
    string GroupId = null,
    string UserId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter.property.groupId">GroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/accountaccess_entitlement#group_id AccountaccessEntitlement#group_id}. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter.property.userId">UserId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/accountaccess_entitlement#user_id AccountaccessEntitlement#user_id}. |

---

##### `GroupId`<sup>Optional</sup> <a name="GroupId" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter.property.groupId"></a>

```csharp
public string GroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/accountaccess_entitlement#group_id AccountaccessEntitlement#group_id}.

---

##### `UserId`<sup>Optional</sup> <a name="UserId" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter.property.userId"></a>

```csharp
public string UserId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/accountaccess_entitlement#user_id AccountaccessEntitlement#user_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### AccountaccessEntitlementEntitlementList <a name="AccountaccessEntitlementEntitlementList" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AccountaccessEntitlementEntitlementList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementList.get"></a>

```csharp
private AccountaccessEntitlementEntitlementOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlement">AccountaccessEntitlementEntitlement</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementList.property.internalValue"></a>

```csharp
public IResolvable|AccountaccessEntitlementEntitlement[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlement">AccountaccessEntitlementEntitlement</a>[]

---


### AccountaccessEntitlementEntitlementOutputReference <a name="AccountaccessEntitlementEntitlementOutputReference" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AccountaccessEntitlementEntitlementOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.putPrincipalRole">PutPrincipalRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.resetPrincipalRole">ResetPrincipalRole</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPrincipalRole` <a name="PutPrincipalRole" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.putPrincipalRole"></a>

```csharp
private void PutPrincipalRole(IResolvable|AccountaccessEntitlementEntitlementPrincipalRole[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.putPrincipalRole.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRole">AccountaccessEntitlementEntitlementPrincipalRole</a>[]

---

##### `ResetPrincipalRole` <a name="ResetPrincipalRole" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.resetPrincipalRole"></a>

```csharp
private void ResetPrincipalRole()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.property.principalRole">PrincipalRole</a></code> | <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleList">AccountaccessEntitlementEntitlementPrincipalRoleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.property.principalRoleInput">PrincipalRoleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRole">AccountaccessEntitlementEntitlementPrincipalRole</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlement">AccountaccessEntitlementEntitlement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrincipalRole`<sup>Required</sup> <a name="PrincipalRole" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.property.principalRole"></a>

```csharp
public AccountaccessEntitlementEntitlementPrincipalRoleList PrincipalRole { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleList">AccountaccessEntitlementEntitlementPrincipalRoleList</a>

---

##### `PrincipalRoleInput`<sup>Optional</sup> <a name="PrincipalRoleInput" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.property.principalRoleInput"></a>

```csharp
public IResolvable|AccountaccessEntitlementEntitlementPrincipalRole[] PrincipalRoleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRole">AccountaccessEntitlementEntitlementPrincipalRole</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AccountaccessEntitlementEntitlement InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlement">AccountaccessEntitlementEntitlement</a>

---


### AccountaccessEntitlementEntitlementPrincipalRoleList <a name="AccountaccessEntitlementEntitlementPrincipalRoleList" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AccountaccessEntitlementEntitlementPrincipalRoleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleList.get"></a>

```csharp
private AccountaccessEntitlementEntitlementPrincipalRoleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRole">AccountaccessEntitlementEntitlementPrincipalRole</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleList.property.internalValue"></a>

```csharp
public IResolvable|AccountaccessEntitlementEntitlementPrincipalRole[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRole">AccountaccessEntitlementEntitlementPrincipalRole</a>[]

---


### AccountaccessEntitlementEntitlementPrincipalRoleOutputReference <a name="AccountaccessEntitlementEntitlementPrincipalRoleOutputReference" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AccountaccessEntitlementEntitlementPrincipalRoleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.putPrincipal">PutPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.resetPrincipal">ResetPrincipal</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPrincipal` <a name="PutPrincipal" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.putPrincipal"></a>

```csharp
private void PutPrincipal(IResolvable|AccountaccessEntitlementEntitlementPrincipalRolePrincipal[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.putPrincipal.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipal">AccountaccessEntitlementEntitlementPrincipalRolePrincipal</a>[]

---

##### `ResetPrincipal` <a name="ResetPrincipal" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.resetPrincipal"></a>

```csharp
private void ResetPrincipal()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.property.accountName">AccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.property.principal">Principal</a></code> | <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalList">AccountaccessEntitlementEntitlementPrincipalRolePrincipalList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.property.principalInput">PrincipalInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipal">AccountaccessEntitlementEntitlementPrincipalRolePrincipal</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRole">AccountaccessEntitlementEntitlementPrincipalRole</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `AccountName`<sup>Required</sup> <a name="AccountName" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.property.accountName"></a>

```csharp
public string AccountName { get; }
```

- *Type:* string

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.property.principal"></a>

```csharp
public AccountaccessEntitlementEntitlementPrincipalRolePrincipalList Principal { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalList">AccountaccessEntitlementEntitlementPrincipalRolePrincipalList</a>

---

##### `PrincipalInput`<sup>Optional</sup> <a name="PrincipalInput" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.property.principalInput"></a>

```csharp
public IResolvable|AccountaccessEntitlementEntitlementPrincipalRolePrincipal[] PrincipalInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipal">AccountaccessEntitlementEntitlementPrincipalRolePrincipal</a>[]

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AccountaccessEntitlementEntitlementPrincipalRole InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRole">AccountaccessEntitlementEntitlementPrincipalRole</a>

---


### AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList <a name="AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList.get"></a>

```csharp
private AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter">AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList.property.internalValue"></a>

```csharp
public IResolvable|AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter">AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter</a>[]

---


### AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference <a name="AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.resetGroupId">ResetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.resetUserId">ResetUserId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGroupId` <a name="ResetGroupId" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.resetGroupId"></a>

```csharp
private void ResetGroupId()
```

##### `ResetUserId` <a name="ResetUserId" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.resetUserId"></a>

```csharp
private void ResetUserId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.groupIdInput">GroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.userIdInput">UserIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.groupId">GroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.userId">UserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter">AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GroupIdInput`<sup>Optional</sup> <a name="GroupIdInput" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.groupIdInput"></a>

```csharp
public string GroupIdInput { get; }
```

- *Type:* string

---

##### `UserIdInput`<sup>Optional</sup> <a name="UserIdInput" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.userIdInput"></a>

```csharp
public string UserIdInput { get; }
```

- *Type:* string

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.groupId"></a>

```csharp
public string GroupId { get; }
```

- *Type:* string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.userId"></a>

```csharp
public string UserId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter">AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter</a>

---


### AccountaccessEntitlementEntitlementPrincipalRolePrincipalList <a name="AccountaccessEntitlementEntitlementPrincipalRolePrincipalList" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AccountaccessEntitlementEntitlementPrincipalRolePrincipalList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalList.get"></a>

```csharp
private AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipal">AccountaccessEntitlementEntitlementPrincipalRolePrincipal</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalList.property.internalValue"></a>

```csharp
public IResolvable|AccountaccessEntitlementEntitlementPrincipalRolePrincipal[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipal">AccountaccessEntitlementEntitlementPrincipalRolePrincipal</a>[]

---


### AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference <a name="AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.putIdentityCenter">PutIdentityCenter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.resetIdentityCenter">ResetIdentityCenter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIdentityCenter` <a name="PutIdentityCenter" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.putIdentityCenter"></a>

```csharp
private void PutIdentityCenter(IResolvable|AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.putIdentityCenter.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter">AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter</a>[]

---

##### `ResetIdentityCenter` <a name="ResetIdentityCenter" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.resetIdentityCenter"></a>

```csharp
private void ResetIdentityCenter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.property.identityCenter">IdentityCenter</a></code> | <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList">AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.property.identityCenterInput">IdentityCenterInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter">AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipal">AccountaccessEntitlementEntitlementPrincipalRolePrincipal</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentityCenter`<sup>Required</sup> <a name="IdentityCenter" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.property.identityCenter"></a>

```csharp
public AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList IdentityCenter { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList">AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterList</a>

---

##### `IdentityCenterInput`<sup>Optional</sup> <a name="IdentityCenterInput" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.property.identityCenterInput"></a>

```csharp
public IResolvable|AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter[] IdentityCenterInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter">AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AccountaccessEntitlementEntitlementPrincipalRolePrincipal InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipal">AccountaccessEntitlementEntitlementPrincipalRolePrincipal</a>

---




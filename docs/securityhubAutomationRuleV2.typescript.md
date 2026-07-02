# `securityhubAutomationRuleV2` Submodule <a name="`securityhubAutomationRuleV2` Submodule" id="@cdktn/provider-aws.securityhubAutomationRuleV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityhubAutomationRuleV2 <a name="SecurityhubAutomationRuleV2" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/securityhub_automation_rule_v2 aws_securityhub_automation_rule_v2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer"></a>

```typescript
import { securityhubAutomationRuleV2 } from '@cdktn/provider-aws'

new securityhubAutomationRuleV2.SecurityhubAutomationRuleV2(scope: Construct, id: string, config: SecurityhubAutomationRuleV2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config">SecurityhubAutomationRuleV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config">SecurityhubAutomationRuleV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.putAction">putAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.putCriteria">putCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.resetCriteria">resetCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.resetRuleStatus">resetRuleStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAction` <a name="putAction" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.putAction"></a>

```typescript
public putAction(value: IResolvable | SecurityhubAutomationRuleV2Action[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.putAction.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Action">SecurityhubAutomationRuleV2Action</a>[]

---

##### `putCriteria` <a name="putCriteria" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.putCriteria"></a>

```typescript
public putCriteria(value: IResolvable | SecurityhubAutomationRuleV2Criteria[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.putCriteria.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria">SecurityhubAutomationRuleV2Criteria</a>[]

---

##### `resetAction` <a name="resetAction" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.resetAction"></a>

```typescript
public resetAction(): void
```

##### `resetCriteria` <a name="resetCriteria" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.resetCriteria"></a>

```typescript
public resetCriteria(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetRuleStatus` <a name="resetRuleStatus" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.resetRuleStatus"></a>

```typescript
public resetRuleStatus(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SecurityhubAutomationRuleV2 resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.isConstruct"></a>

```typescript
import { securityhubAutomationRuleV2 } from '@cdktn/provider-aws'

securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.isTerraformElement"></a>

```typescript
import { securityhubAutomationRuleV2 } from '@cdktn/provider-aws'

securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.isTerraformResource"></a>

```typescript
import { securityhubAutomationRuleV2 } from '@cdktn/provider-aws'

securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.generateConfigForImport"></a>

```typescript
import { securityhubAutomationRuleV2 } from '@cdktn/provider-aws'

securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SecurityhubAutomationRuleV2 resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecurityhubAutomationRuleV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecurityhubAutomationRuleV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/securityhub_automation_rule_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SecurityhubAutomationRuleV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.action">action</a></code> | <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList">SecurityhubAutomationRuleV2ActionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.criteria">criteria</a></code> | <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList">SecurityhubAutomationRuleV2CriteriaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleId">ruleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.tagsAll">tagsAll</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.actionInput">actionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Action">SecurityhubAutomationRuleV2Action</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.criteriaInput">criteriaInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria">SecurityhubAutomationRuleV2Criteria</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleNameInput">ruleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleOrderInput">ruleOrderInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleStatusInput">ruleStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleName">ruleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleOrder">ruleOrder</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleStatus">ruleStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.action"></a>

```typescript
public readonly action: SecurityhubAutomationRuleV2ActionList;
```

- *Type:* <a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList">SecurityhubAutomationRuleV2ActionList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.criteria"></a>

```typescript
public readonly criteria: SecurityhubAutomationRuleV2CriteriaList;
```

- *Type:* <a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList">SecurityhubAutomationRuleV2CriteriaList</a>

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleId"></a>

```typescript
public readonly ruleId: string;
```

- *Type:* string

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.actionInput"></a>

```typescript
public readonly actionInput: IResolvable | SecurityhubAutomationRuleV2Action[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Action">SecurityhubAutomationRuleV2Action</a>[]

---

##### `criteriaInput`<sup>Optional</sup> <a name="criteriaInput" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.criteriaInput"></a>

```typescript
public readonly criteriaInput: IResolvable | SecurityhubAutomationRuleV2Criteria[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria">SecurityhubAutomationRuleV2Criteria</a>[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `ruleNameInput`<sup>Optional</sup> <a name="ruleNameInput" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleNameInput"></a>

```typescript
public readonly ruleNameInput: string;
```

- *Type:* string

---

##### `ruleOrderInput`<sup>Optional</sup> <a name="ruleOrderInput" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleOrderInput"></a>

```typescript
public readonly ruleOrderInput: number;
```

- *Type:* number

---

##### `ruleStatusInput`<sup>Optional</sup> <a name="ruleStatusInput" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleStatusInput"></a>

```typescript
public readonly ruleStatusInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

---

##### `ruleOrder`<sup>Required</sup> <a name="ruleOrder" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleOrder"></a>

```typescript
public readonly ruleOrder: number;
```

- *Type:* number

---

##### `ruleStatus`<sup>Required</sup> <a name="ruleStatus" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleStatus"></a>

```typescript
public readonly ruleStatus: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityhubAutomationRuleV2Action <a name="SecurityhubAutomationRuleV2Action" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Action"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Action.Initializer"></a>

```typescript
import { securityhubAutomationRuleV2 } from '@cdktn/provider-aws'

const securityhubAutomationRuleV2Action: securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Action = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Action.property.type">type</a></code> | <code>string</code> | The action type: FINDING_FIELDS_UPDATE or EXTERNAL_INTEGRATION. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Action.property.externalIntegrationConfiguration">externalIntegrationConfiguration</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration">SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration</a>[]</code> | external_integration_configuration block. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Action.property.findingFieldsUpdate">findingFieldsUpdate</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdate">SecurityhubAutomationRuleV2ActionFindingFieldsUpdate</a>[]</code> | finding_fields_update block. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Action.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The action type: FINDING_FIELDS_UPDATE or EXTERNAL_INTEGRATION.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/securityhub_automation_rule_v2#type SecurityhubAutomationRuleV2#type}

---

##### `externalIntegrationConfiguration`<sup>Optional</sup> <a name="externalIntegrationConfiguration" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Action.property.externalIntegrationConfiguration"></a>

```typescript
public readonly externalIntegrationConfiguration: IResolvable | SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration">SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration</a>[]

external_integration_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/securityhub_automation_rule_v2#external_integration_configuration SecurityhubAutomationRuleV2#external_integration_configuration}

---

##### `findingFieldsUpdate`<sup>Optional</sup> <a name="findingFieldsUpdate" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Action.property.findingFieldsUpdate"></a>

```typescript
public readonly findingFieldsUpdate: IResolvable | SecurityhubAutomationRuleV2ActionFindingFieldsUpdate[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdate">SecurityhubAutomationRuleV2ActionFindingFieldsUpdate</a>[]

finding_fields_update block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/securityhub_automation_rule_v2#finding_fields_update SecurityhubAutomationRuleV2#finding_fields_update}

---

### SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration <a name="SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration.Initializer"></a>

```typescript
import { securityhubAutomationRuleV2 } from '@cdktn/provider-aws'

const securityhubAutomationRuleV2ActionExternalIntegrationConfiguration: securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration.property.connectorArn">connectorArn</a></code> | <code>string</code> | The ARN of the connector. |

---

##### `connectorArn`<sup>Required</sup> <a name="connectorArn" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration.property.connectorArn"></a>

```typescript
public readonly connectorArn: string;
```

- *Type:* string

The ARN of the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/securityhub_automation_rule_v2#connector_arn SecurityhubAutomationRuleV2#connector_arn}

---

### SecurityhubAutomationRuleV2ActionFindingFieldsUpdate <a name="SecurityhubAutomationRuleV2ActionFindingFieldsUpdate" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdate.Initializer"></a>

```typescript
import { securityhubAutomationRuleV2 } from '@cdktn/provider-aws'

const securityhubAutomationRuleV2ActionFindingFieldsUpdate: securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdate.property.comment">comment</a></code> | <code>string</code> | A comment for the finding. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdate.property.severityId">severityId</a></code> | <code>number</code> | The severity ID to assign. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdate.property.statusId">statusId</a></code> | <code>number</code> | The status ID to assign. |

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdate.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

A comment for the finding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/securityhub_automation_rule_v2#comment SecurityhubAutomationRuleV2#comment}

---

##### `severityId`<sup>Optional</sup> <a name="severityId" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdate.property.severityId"></a>

```typescript
public readonly severityId: number;
```

- *Type:* number

The severity ID to assign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/securityhub_automation_rule_v2#severity_id SecurityhubAutomationRuleV2#severity_id}

---

##### `statusId`<sup>Optional</sup> <a name="statusId" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdate.property.statusId"></a>

```typescript
public readonly statusId: number;
```

- *Type:* number

The status ID to assign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/securityhub_automation_rule_v2#status_id SecurityhubAutomationRuleV2#status_id}

---

### SecurityhubAutomationRuleV2Config <a name="SecurityhubAutomationRuleV2Config" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.Initializer"></a>

```typescript
import { securityhubAutomationRuleV2 } from '@cdktn/provider-aws'

const securityhubAutomationRuleV2Config: securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.description">description</a></code> | <code>string</code> | A description of the automation rule. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.ruleName">ruleName</a></code> | <code>string</code> | The name of the automation rule. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.ruleOrder">ruleOrder</a></code> | <code>number</code> | The priority of the rule (lower values = higher priority). |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.action">action</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Action">SecurityhubAutomationRuleV2Action</a>[]</code> | action block. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.criteria">criteria</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria">SecurityhubAutomationRuleV2Criteria</a>[]</code> | criteria block. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.ruleStatus">ruleStatus</a></code> | <code>string</code> | The status of the rule: ENABLED or DISABLED. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/securityhub_automation_rule_v2#tags SecurityhubAutomationRuleV2#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/securityhub_automation_rule_v2#description SecurityhubAutomationRuleV2#description}

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

The name of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/securityhub_automation_rule_v2#rule_name SecurityhubAutomationRuleV2#rule_name}

---

##### `ruleOrder`<sup>Required</sup> <a name="ruleOrder" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.ruleOrder"></a>

```typescript
public readonly ruleOrder: number;
```

- *Type:* number

The priority of the rule (lower values = higher priority).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/securityhub_automation_rule_v2#rule_order SecurityhubAutomationRuleV2#rule_order}

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.action"></a>

```typescript
public readonly action: IResolvable | SecurityhubAutomationRuleV2Action[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Action">SecurityhubAutomationRuleV2Action</a>[]

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/securityhub_automation_rule_v2#action SecurityhubAutomationRuleV2#action}

---

##### `criteria`<sup>Optional</sup> <a name="criteria" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.criteria"></a>

```typescript
public readonly criteria: IResolvable | SecurityhubAutomationRuleV2Criteria[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria">SecurityhubAutomationRuleV2Criteria</a>[]

criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/securityhub_automation_rule_v2#criteria SecurityhubAutomationRuleV2#criteria}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/securityhub_automation_rule_v2#region SecurityhubAutomationRuleV2#region}

---

##### `ruleStatus`<sup>Optional</sup> <a name="ruleStatus" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.ruleStatus"></a>

```typescript
public readonly ruleStatus: string;
```

- *Type:* string

The status of the rule: ENABLED or DISABLED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/securityhub_automation_rule_v2#rule_status SecurityhubAutomationRuleV2#rule_status}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/securityhub_automation_rule_v2#tags SecurityhubAutomationRuleV2#tags}.

---

### SecurityhubAutomationRuleV2Criteria <a name="SecurityhubAutomationRuleV2Criteria" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria.Initializer"></a>

```typescript
import { securityhubAutomationRuleV2 } from '@cdktn/provider-aws'

const securityhubAutomationRuleV2Criteria: securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria.property.ocsfFindingCriteriaJson">ocsfFindingCriteriaJson</a></code> | <code>string</code> | JSON-encoded OCSF finding criteria for the rule. |

---

##### `ocsfFindingCriteriaJson`<sup>Required</sup> <a name="ocsfFindingCriteriaJson" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria.property.ocsfFindingCriteriaJson"></a>

```typescript
public readonly ocsfFindingCriteriaJson: string;
```

- *Type:* string

JSON-encoded OCSF finding criteria for the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/securityhub_automation_rule_v2#ocsf_finding_criteria_json SecurityhubAutomationRuleV2#ocsf_finding_criteria_json}

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList <a name="SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.Initializer"></a>

```typescript
import { securityhubAutomationRuleV2 } from '@cdktn/provider-aws'

new securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.get"></a>

```typescript
public get(index: number): SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration">SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration">SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration</a>[]

---


### SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference <a name="SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.Initializer"></a>

```typescript
import { securityhubAutomationRuleV2 } from '@cdktn/provider-aws'

new securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.property.connectorArnInput">connectorArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.property.connectorArn">connectorArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration">SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectorArnInput`<sup>Optional</sup> <a name="connectorArnInput" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.property.connectorArnInput"></a>

```typescript
public readonly connectorArnInput: string;
```

- *Type:* string

---

##### `connectorArn`<sup>Required</sup> <a name="connectorArn" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.property.connectorArn"></a>

```typescript
public readonly connectorArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration">SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration</a>

---


### SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList <a name="SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.Initializer"></a>

```typescript
import { securityhubAutomationRuleV2 } from '@cdktn/provider-aws'

new securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.get"></a>

```typescript
public get(index: number): SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdate">SecurityhubAutomationRuleV2ActionFindingFieldsUpdate</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityhubAutomationRuleV2ActionFindingFieldsUpdate[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdate">SecurityhubAutomationRuleV2ActionFindingFieldsUpdate</a>[]

---


### SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference <a name="SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.Initializer"></a>

```typescript
import { securityhubAutomationRuleV2 } from '@cdktn/provider-aws'

new securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.resetSeverityId">resetSeverityId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.resetStatusId">resetStatusId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComment` <a name="resetComment" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetSeverityId` <a name="resetSeverityId" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.resetSeverityId"></a>

```typescript
public resetSeverityId(): void
```

##### `resetStatusId` <a name="resetStatusId" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.resetStatusId"></a>

```typescript
public resetStatusId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.property.severityIdInput">severityIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.property.statusIdInput">statusIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.property.severityId">severityId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.property.statusId">statusId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdate">SecurityhubAutomationRuleV2ActionFindingFieldsUpdate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `severityIdInput`<sup>Optional</sup> <a name="severityIdInput" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.property.severityIdInput"></a>

```typescript
public readonly severityIdInput: number;
```

- *Type:* number

---

##### `statusIdInput`<sup>Optional</sup> <a name="statusIdInput" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.property.statusIdInput"></a>

```typescript
public readonly statusIdInput: number;
```

- *Type:* number

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `severityId`<sup>Required</sup> <a name="severityId" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.property.severityId"></a>

```typescript
public readonly severityId: number;
```

- *Type:* number

---

##### `statusId`<sup>Required</sup> <a name="statusId" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.property.statusId"></a>

```typescript
public readonly statusId: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityhubAutomationRuleV2ActionFindingFieldsUpdate;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdate">SecurityhubAutomationRuleV2ActionFindingFieldsUpdate</a>

---


### SecurityhubAutomationRuleV2ActionList <a name="SecurityhubAutomationRuleV2ActionList" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.Initializer"></a>

```typescript
import { securityhubAutomationRuleV2 } from '@cdktn/provider-aws'

new securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.get"></a>

```typescript
public get(index: number): SecurityhubAutomationRuleV2ActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Action">SecurityhubAutomationRuleV2Action</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityhubAutomationRuleV2Action[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Action">SecurityhubAutomationRuleV2Action</a>[]

---


### SecurityhubAutomationRuleV2ActionOutputReference <a name="SecurityhubAutomationRuleV2ActionOutputReference" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.Initializer"></a>

```typescript
import { securityhubAutomationRuleV2 } from '@cdktn/provider-aws'

new securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.putExternalIntegrationConfiguration">putExternalIntegrationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.putFindingFieldsUpdate">putFindingFieldsUpdate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.resetExternalIntegrationConfiguration">resetExternalIntegrationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.resetFindingFieldsUpdate">resetFindingFieldsUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExternalIntegrationConfiguration` <a name="putExternalIntegrationConfiguration" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.putExternalIntegrationConfiguration"></a>

```typescript
public putExternalIntegrationConfiguration(value: IResolvable | SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.putExternalIntegrationConfiguration.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration">SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration</a>[]

---

##### `putFindingFieldsUpdate` <a name="putFindingFieldsUpdate" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.putFindingFieldsUpdate"></a>

```typescript
public putFindingFieldsUpdate(value: IResolvable | SecurityhubAutomationRuleV2ActionFindingFieldsUpdate[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.putFindingFieldsUpdate.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdate">SecurityhubAutomationRuleV2ActionFindingFieldsUpdate</a>[]

---

##### `resetExternalIntegrationConfiguration` <a name="resetExternalIntegrationConfiguration" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.resetExternalIntegrationConfiguration"></a>

```typescript
public resetExternalIntegrationConfiguration(): void
```

##### `resetFindingFieldsUpdate` <a name="resetFindingFieldsUpdate" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.resetFindingFieldsUpdate"></a>

```typescript
public resetFindingFieldsUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.property.externalIntegrationConfiguration">externalIntegrationConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList">SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.property.findingFieldsUpdate">findingFieldsUpdate</a></code> | <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList">SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.property.externalIntegrationConfigurationInput">externalIntegrationConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration">SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.property.findingFieldsUpdateInput">findingFieldsUpdateInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdate">SecurityhubAutomationRuleV2ActionFindingFieldsUpdate</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Action">SecurityhubAutomationRuleV2Action</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `externalIntegrationConfiguration`<sup>Required</sup> <a name="externalIntegrationConfiguration" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.property.externalIntegrationConfiguration"></a>

```typescript
public readonly externalIntegrationConfiguration: SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList;
```

- *Type:* <a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList">SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList</a>

---

##### `findingFieldsUpdate`<sup>Required</sup> <a name="findingFieldsUpdate" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.property.findingFieldsUpdate"></a>

```typescript
public readonly findingFieldsUpdate: SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList;
```

- *Type:* <a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList">SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList</a>

---

##### `externalIntegrationConfigurationInput`<sup>Optional</sup> <a name="externalIntegrationConfigurationInput" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.property.externalIntegrationConfigurationInput"></a>

```typescript
public readonly externalIntegrationConfigurationInput: IResolvable | SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration">SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration</a>[]

---

##### `findingFieldsUpdateInput`<sup>Optional</sup> <a name="findingFieldsUpdateInput" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.property.findingFieldsUpdateInput"></a>

```typescript
public readonly findingFieldsUpdateInput: IResolvable | SecurityhubAutomationRuleV2ActionFindingFieldsUpdate[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdate">SecurityhubAutomationRuleV2ActionFindingFieldsUpdate</a>[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityhubAutomationRuleV2Action;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Action">SecurityhubAutomationRuleV2Action</a>

---


### SecurityhubAutomationRuleV2CriteriaList <a name="SecurityhubAutomationRuleV2CriteriaList" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.Initializer"></a>

```typescript
import { securityhubAutomationRuleV2 } from '@cdktn/provider-aws'

new securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.get"></a>

```typescript
public get(index: number): SecurityhubAutomationRuleV2CriteriaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria">SecurityhubAutomationRuleV2Criteria</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityhubAutomationRuleV2Criteria[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria">SecurityhubAutomationRuleV2Criteria</a>[]

---


### SecurityhubAutomationRuleV2CriteriaOutputReference <a name="SecurityhubAutomationRuleV2CriteriaOutputReference" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.Initializer"></a>

```typescript
import { securityhubAutomationRuleV2 } from '@cdktn/provider-aws'

new securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.property.ocsfFindingCriteriaJsonInput">ocsfFindingCriteriaJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.property.ocsfFindingCriteriaJson">ocsfFindingCriteriaJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria">SecurityhubAutomationRuleV2Criteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ocsfFindingCriteriaJsonInput`<sup>Optional</sup> <a name="ocsfFindingCriteriaJsonInput" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.property.ocsfFindingCriteriaJsonInput"></a>

```typescript
public readonly ocsfFindingCriteriaJsonInput: string;
```

- *Type:* string

---

##### `ocsfFindingCriteriaJson`<sup>Required</sup> <a name="ocsfFindingCriteriaJson" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.property.ocsfFindingCriteriaJson"></a>

```typescript
public readonly ocsfFindingCriteriaJson: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityhubAutomationRuleV2Criteria;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria">SecurityhubAutomationRuleV2Criteria</a>

---




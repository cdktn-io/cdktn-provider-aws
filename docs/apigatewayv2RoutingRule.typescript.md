# `apigatewayv2RoutingRule` Submodule <a name="`apigatewayv2RoutingRule` Submodule" id="@cdktn/provider-aws.apigatewayv2RoutingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Apigatewayv2RoutingRule <a name="Apigatewayv2RoutingRule" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule aws_apigatewayv2_routing_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer"></a>

```typescript
import { apigatewayv2RoutingRule } from '@cdktn/provider-aws'

new apigatewayv2RoutingRule.Apigatewayv2RoutingRule(scope: Construct, id: string, config: Apigatewayv2RoutingRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig">Apigatewayv2RoutingRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig">Apigatewayv2RoutingRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.putAction">putAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAction` <a name="putAction" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.putAction"></a>

```typescript
public putAction(value: IResolvable | Apigatewayv2RoutingRuleAction[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.putAction.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleAction">Apigatewayv2RoutingRuleAction</a>[]

---

##### `putCondition` <a name="putCondition" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.putCondition"></a>

```typescript
public putCondition(value: IResolvable | Apigatewayv2RoutingRuleCondition[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.putCondition.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleCondition">Apigatewayv2RoutingRuleCondition</a>[]

---

##### `resetAction` <a name="resetAction" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.resetAction"></a>

```typescript
public resetAction(): void
```

##### `resetCondition` <a name="resetCondition" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Apigatewayv2RoutingRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.isConstruct"></a>

```typescript
import { apigatewayv2RoutingRule } from '@cdktn/provider-aws'

apigatewayv2RoutingRule.Apigatewayv2RoutingRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.isTerraformElement"></a>

```typescript
import { apigatewayv2RoutingRule } from '@cdktn/provider-aws'

apigatewayv2RoutingRule.Apigatewayv2RoutingRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.isTerraformResource"></a>

```typescript
import { apigatewayv2RoutingRule } from '@cdktn/provider-aws'

apigatewayv2RoutingRule.Apigatewayv2RoutingRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.generateConfigForImport"></a>

```typescript
import { apigatewayv2RoutingRule } from '@cdktn/provider-aws'

apigatewayv2RoutingRule.Apigatewayv2RoutingRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Apigatewayv2RoutingRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Apigatewayv2RoutingRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Apigatewayv2RoutingRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Apigatewayv2RoutingRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.action">action</a></code> | <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList">Apigatewayv2RoutingRuleActionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList">Apigatewayv2RoutingRuleConditionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.routingRuleArn">routingRuleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.routingRuleId">routingRuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.actionInput">actionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleAction">Apigatewayv2RoutingRuleAction</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.conditionInput">conditionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleCondition">Apigatewayv2RoutingRuleCondition</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.domainNameInput">domainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.action"></a>

```typescript
public readonly action: Apigatewayv2RoutingRuleActionList;
```

- *Type:* <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList">Apigatewayv2RoutingRuleActionList</a>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.condition"></a>

```typescript
public readonly condition: Apigatewayv2RoutingRuleConditionList;
```

- *Type:* <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList">Apigatewayv2RoutingRuleConditionList</a>

---

##### `routingRuleArn`<sup>Required</sup> <a name="routingRuleArn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.routingRuleArn"></a>

```typescript
public readonly routingRuleArn: string;
```

- *Type:* string

---

##### `routingRuleId`<sup>Required</sup> <a name="routingRuleId" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.routingRuleId"></a>

```typescript
public readonly routingRuleId: string;
```

- *Type:* string

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.actionInput"></a>

```typescript
public readonly actionInput: IResolvable | Apigatewayv2RoutingRuleAction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleAction">Apigatewayv2RoutingRuleAction</a>[]

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.conditionInput"></a>

```typescript
public readonly conditionInput: IResolvable | Apigatewayv2RoutingRuleCondition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleCondition">Apigatewayv2RoutingRuleCondition</a>[]

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.domainNameInput"></a>

```typescript
public readonly domainNameInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Apigatewayv2RoutingRuleAction <a name="Apigatewayv2RoutingRuleAction" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleAction.Initializer"></a>

```typescript
import { apigatewayv2RoutingRule } from '@cdktn/provider-aws'

const apigatewayv2RoutingRuleAction: apigatewayv2RoutingRule.Apigatewayv2RoutingRuleAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleAction.property.invokeApi">invokeApi</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApi">Apigatewayv2RoutingRuleActionInvokeApi</a>[]</code> | invoke_api block. |

---

##### `invokeApi`<sup>Optional</sup> <a name="invokeApi" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleAction.property.invokeApi"></a>

```typescript
public readonly invokeApi: IResolvable | Apigatewayv2RoutingRuleActionInvokeApi[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApi">Apigatewayv2RoutingRuleActionInvokeApi</a>[]

invoke_api block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#invoke_api Apigatewayv2RoutingRule#invoke_api}

---

### Apigatewayv2RoutingRuleActionInvokeApi <a name="Apigatewayv2RoutingRuleActionInvokeApi" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApi"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApi.Initializer"></a>

```typescript
import { apigatewayv2RoutingRule } from '@cdktn/provider-aws'

const apigatewayv2RoutingRuleActionInvokeApi: apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApi = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApi.property.apiId">apiId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#api_id Apigatewayv2RoutingRule#api_id}. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApi.property.stage">stage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#stage Apigatewayv2RoutingRule#stage}. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApi.property.stripBasePath">stripBasePath</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#strip_base_path Apigatewayv2RoutingRule#strip_base_path}. |

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApi.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#api_id Apigatewayv2RoutingRule#api_id}.

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApi.property.stage"></a>

```typescript
public readonly stage: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#stage Apigatewayv2RoutingRule#stage}.

---

##### `stripBasePath`<sup>Optional</sup> <a name="stripBasePath" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApi.property.stripBasePath"></a>

```typescript
public readonly stripBasePath: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#strip_base_path Apigatewayv2RoutingRule#strip_base_path}.

---

### Apigatewayv2RoutingRuleCondition <a name="Apigatewayv2RoutingRuleCondition" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleCondition.Initializer"></a>

```typescript
import { apigatewayv2RoutingRule } from '@cdktn/provider-aws'

const apigatewayv2RoutingRuleCondition: apigatewayv2RoutingRule.Apigatewayv2RoutingRuleCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleCondition.property.matchBasePaths">matchBasePaths</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePaths">Apigatewayv2RoutingRuleConditionMatchBasePaths</a>[]</code> | match_base_paths block. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleCondition.property.matchHeaders">matchHeaders</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeaders">Apigatewayv2RoutingRuleConditionMatchHeaders</a>[]</code> | match_headers block. |

---

##### `matchBasePaths`<sup>Optional</sup> <a name="matchBasePaths" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleCondition.property.matchBasePaths"></a>

```typescript
public readonly matchBasePaths: IResolvable | Apigatewayv2RoutingRuleConditionMatchBasePaths[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePaths">Apigatewayv2RoutingRuleConditionMatchBasePaths</a>[]

match_base_paths block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#match_base_paths Apigatewayv2RoutingRule#match_base_paths}

---

##### `matchHeaders`<sup>Optional</sup> <a name="matchHeaders" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleCondition.property.matchHeaders"></a>

```typescript
public readonly matchHeaders: IResolvable | Apigatewayv2RoutingRuleConditionMatchHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeaders">Apigatewayv2RoutingRuleConditionMatchHeaders</a>[]

match_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#match_headers Apigatewayv2RoutingRule#match_headers}

---

### Apigatewayv2RoutingRuleConditionMatchBasePaths <a name="Apigatewayv2RoutingRuleConditionMatchBasePaths" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePaths"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePaths.Initializer"></a>

```typescript
import { apigatewayv2RoutingRule } from '@cdktn/provider-aws'

const apigatewayv2RoutingRuleConditionMatchBasePaths: apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePaths = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePaths.property.anyOf">anyOf</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#any_of Apigatewayv2RoutingRule#any_of}. |

---

##### `anyOf`<sup>Required</sup> <a name="anyOf" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePaths.property.anyOf"></a>

```typescript
public readonly anyOf: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#any_of Apigatewayv2RoutingRule#any_of}.

---

### Apigatewayv2RoutingRuleConditionMatchHeaders <a name="Apigatewayv2RoutingRuleConditionMatchHeaders" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeaders.Initializer"></a>

```typescript
import { apigatewayv2RoutingRule } from '@cdktn/provider-aws'

const apigatewayv2RoutingRuleConditionMatchHeaders: apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeaders = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeaders.property.anyOf">anyOf</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf">Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf</a>[]</code> | any_of block. |

---

##### `anyOf`<sup>Optional</sup> <a name="anyOf" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeaders.property.anyOf"></a>

```typescript
public readonly anyOf: IResolvable | Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf">Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf</a>[]

any_of block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#any_of Apigatewayv2RoutingRule#any_of}

---

### Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf <a name="Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf.Initializer"></a>

```typescript
import { apigatewayv2RoutingRule } from '@cdktn/provider-aws'

const apigatewayv2RoutingRuleConditionMatchHeadersAnyOf: apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf.property.header">header</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#header Apigatewayv2RoutingRule#header}. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf.property.valueGlob">valueGlob</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#value_glob Apigatewayv2RoutingRule#value_glob}. |

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf.property.header"></a>

```typescript
public readonly header: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#header Apigatewayv2RoutingRule#header}.

---

##### `valueGlob`<sup>Required</sup> <a name="valueGlob" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf.property.valueGlob"></a>

```typescript
public readonly valueGlob: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#value_glob Apigatewayv2RoutingRule#value_glob}.

---

### Apigatewayv2RoutingRuleConfig <a name="Apigatewayv2RoutingRuleConfig" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.Initializer"></a>

```typescript
import { apigatewayv2RoutingRule } from '@cdktn/provider-aws'

const apigatewayv2RoutingRuleConfig: apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.domainName">domainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#domain_name Apigatewayv2RoutingRule#domain_name}. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.priority">priority</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#priority Apigatewayv2RoutingRule#priority}. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.action">action</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleAction">Apigatewayv2RoutingRuleAction</a>[]</code> | action block. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.condition">condition</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleCondition">Apigatewayv2RoutingRuleCondition</a>[]</code> | condition block. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#domain_name Apigatewayv2RoutingRule#domain_name}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#priority Apigatewayv2RoutingRule#priority}.

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.action"></a>

```typescript
public readonly action: IResolvable | Apigatewayv2RoutingRuleAction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleAction">Apigatewayv2RoutingRuleAction</a>[]

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#action Apigatewayv2RoutingRule#action}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.condition"></a>

```typescript
public readonly condition: IResolvable | Apigatewayv2RoutingRuleCondition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleCondition">Apigatewayv2RoutingRuleCondition</a>[]

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#condition Apigatewayv2RoutingRule#condition}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#region Apigatewayv2RoutingRule#region}

---

## Classes <a name="Classes" id="Classes"></a>

### Apigatewayv2RoutingRuleActionInvokeApiList <a name="Apigatewayv2RoutingRuleActionInvokeApiList" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.Initializer"></a>

```typescript
import { apigatewayv2RoutingRule } from '@cdktn/provider-aws'

new apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.get"></a>

```typescript
public get(index: number): Apigatewayv2RoutingRuleActionInvokeApiOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApi">Apigatewayv2RoutingRuleActionInvokeApi</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Apigatewayv2RoutingRuleActionInvokeApi[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApi">Apigatewayv2RoutingRuleActionInvokeApi</a>[]

---


### Apigatewayv2RoutingRuleActionInvokeApiOutputReference <a name="Apigatewayv2RoutingRuleActionInvokeApiOutputReference" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.Initializer"></a>

```typescript
import { apigatewayv2RoutingRule } from '@cdktn/provider-aws'

new apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.resetStripBasePath">resetStripBasePath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStripBasePath` <a name="resetStripBasePath" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.resetStripBasePath"></a>

```typescript
public resetStripBasePath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.apiIdInput">apiIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.stageInput">stageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.stripBasePathInput">stripBasePathInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.apiId">apiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.stage">stage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.stripBasePath">stripBasePath</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApi">Apigatewayv2RoutingRuleActionInvokeApi</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiIdInput`<sup>Optional</sup> <a name="apiIdInput" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.apiIdInput"></a>

```typescript
public readonly apiIdInput: string;
```

- *Type:* string

---

##### `stageInput`<sup>Optional</sup> <a name="stageInput" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.stageInput"></a>

```typescript
public readonly stageInput: string;
```

- *Type:* string

---

##### `stripBasePathInput`<sup>Optional</sup> <a name="stripBasePathInput" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.stripBasePathInput"></a>

```typescript
public readonly stripBasePathInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.stage"></a>

```typescript
public readonly stage: string;
```

- *Type:* string

---

##### `stripBasePath`<sup>Required</sup> <a name="stripBasePath" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.stripBasePath"></a>

```typescript
public readonly stripBasePath: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Apigatewayv2RoutingRuleActionInvokeApi;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApi">Apigatewayv2RoutingRuleActionInvokeApi</a>

---


### Apigatewayv2RoutingRuleActionList <a name="Apigatewayv2RoutingRuleActionList" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.Initializer"></a>

```typescript
import { apigatewayv2RoutingRule } from '@cdktn/provider-aws'

new apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.get"></a>

```typescript
public get(index: number): Apigatewayv2RoutingRuleActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleAction">Apigatewayv2RoutingRuleAction</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Apigatewayv2RoutingRuleAction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleAction">Apigatewayv2RoutingRuleAction</a>[]

---


### Apigatewayv2RoutingRuleActionOutputReference <a name="Apigatewayv2RoutingRuleActionOutputReference" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.Initializer"></a>

```typescript
import { apigatewayv2RoutingRule } from '@cdktn/provider-aws'

new apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.putInvokeApi">putInvokeApi</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.resetInvokeApi">resetInvokeApi</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInvokeApi` <a name="putInvokeApi" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.putInvokeApi"></a>

```typescript
public putInvokeApi(value: IResolvable | Apigatewayv2RoutingRuleActionInvokeApi[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.putInvokeApi.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApi">Apigatewayv2RoutingRuleActionInvokeApi</a>[]

---

##### `resetInvokeApi` <a name="resetInvokeApi" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.resetInvokeApi"></a>

```typescript
public resetInvokeApi(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.property.invokeApi">invokeApi</a></code> | <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList">Apigatewayv2RoutingRuleActionInvokeApiList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.property.invokeApiInput">invokeApiInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApi">Apigatewayv2RoutingRuleActionInvokeApi</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleAction">Apigatewayv2RoutingRuleAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `invokeApi`<sup>Required</sup> <a name="invokeApi" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.property.invokeApi"></a>

```typescript
public readonly invokeApi: Apigatewayv2RoutingRuleActionInvokeApiList;
```

- *Type:* <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList">Apigatewayv2RoutingRuleActionInvokeApiList</a>

---

##### `invokeApiInput`<sup>Optional</sup> <a name="invokeApiInput" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.property.invokeApiInput"></a>

```typescript
public readonly invokeApiInput: IResolvable | Apigatewayv2RoutingRuleActionInvokeApi[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApi">Apigatewayv2RoutingRuleActionInvokeApi</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Apigatewayv2RoutingRuleAction;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleAction">Apigatewayv2RoutingRuleAction</a>

---


### Apigatewayv2RoutingRuleConditionList <a name="Apigatewayv2RoutingRuleConditionList" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.Initializer"></a>

```typescript
import { apigatewayv2RoutingRule } from '@cdktn/provider-aws'

new apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.get"></a>

```typescript
public get(index: number): Apigatewayv2RoutingRuleConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleCondition">Apigatewayv2RoutingRuleCondition</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Apigatewayv2RoutingRuleCondition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleCondition">Apigatewayv2RoutingRuleCondition</a>[]

---


### Apigatewayv2RoutingRuleConditionMatchBasePathsList <a name="Apigatewayv2RoutingRuleConditionMatchBasePathsList" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.Initializer"></a>

```typescript
import { apigatewayv2RoutingRule } from '@cdktn/provider-aws'

new apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.get"></a>

```typescript
public get(index: number): Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePaths">Apigatewayv2RoutingRuleConditionMatchBasePaths</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Apigatewayv2RoutingRuleConditionMatchBasePaths[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePaths">Apigatewayv2RoutingRuleConditionMatchBasePaths</a>[]

---


### Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference <a name="Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.Initializer"></a>

```typescript
import { apigatewayv2RoutingRule } from '@cdktn/provider-aws'

new apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.property.anyOfInput">anyOfInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.property.anyOf">anyOf</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePaths">Apigatewayv2RoutingRuleConditionMatchBasePaths</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `anyOfInput`<sup>Optional</sup> <a name="anyOfInput" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.property.anyOfInput"></a>

```typescript
public readonly anyOfInput: string[];
```

- *Type:* string[]

---

##### `anyOf`<sup>Required</sup> <a name="anyOf" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.property.anyOf"></a>

```typescript
public readonly anyOf: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Apigatewayv2RoutingRuleConditionMatchBasePaths;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePaths">Apigatewayv2RoutingRuleConditionMatchBasePaths</a>

---


### Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList <a name="Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.Initializer"></a>

```typescript
import { apigatewayv2RoutingRule } from '@cdktn/provider-aws'

new apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.get"></a>

```typescript
public get(index: number): Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf">Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf">Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf</a>[]

---


### Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference <a name="Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.Initializer"></a>

```typescript
import { apigatewayv2RoutingRule } from '@cdktn/provider-aws'

new apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.property.headerInput">headerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.property.valueGlobInput">valueGlobInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.property.header">header</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.property.valueGlob">valueGlob</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf">Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `headerInput`<sup>Optional</sup> <a name="headerInput" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.property.headerInput"></a>

```typescript
public readonly headerInput: string;
```

- *Type:* string

---

##### `valueGlobInput`<sup>Optional</sup> <a name="valueGlobInput" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.property.valueGlobInput"></a>

```typescript
public readonly valueGlobInput: string;
```

- *Type:* string

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.property.header"></a>

```typescript
public readonly header: string;
```

- *Type:* string

---

##### `valueGlob`<sup>Required</sup> <a name="valueGlob" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.property.valueGlob"></a>

```typescript
public readonly valueGlob: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf">Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf</a>

---


### Apigatewayv2RoutingRuleConditionMatchHeadersList <a name="Apigatewayv2RoutingRuleConditionMatchHeadersList" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.Initializer"></a>

```typescript
import { apigatewayv2RoutingRule } from '@cdktn/provider-aws'

new apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.get"></a>

```typescript
public get(index: number): Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeaders">Apigatewayv2RoutingRuleConditionMatchHeaders</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Apigatewayv2RoutingRuleConditionMatchHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeaders">Apigatewayv2RoutingRuleConditionMatchHeaders</a>[]

---


### Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference <a name="Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.Initializer"></a>

```typescript
import { apigatewayv2RoutingRule } from '@cdktn/provider-aws'

new apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.putAnyOf">putAnyOf</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.resetAnyOf">resetAnyOf</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAnyOf` <a name="putAnyOf" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.putAnyOf"></a>

```typescript
public putAnyOf(value: IResolvable | Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.putAnyOf.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf">Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf</a>[]

---

##### `resetAnyOf` <a name="resetAnyOf" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.resetAnyOf"></a>

```typescript
public resetAnyOf(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.property.anyOf">anyOf</a></code> | <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList">Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.property.anyOfInput">anyOfInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf">Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeaders">Apigatewayv2RoutingRuleConditionMatchHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `anyOf`<sup>Required</sup> <a name="anyOf" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.property.anyOf"></a>

```typescript
public readonly anyOf: Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList;
```

- *Type:* <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList">Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList</a>

---

##### `anyOfInput`<sup>Optional</sup> <a name="anyOfInput" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.property.anyOfInput"></a>

```typescript
public readonly anyOfInput: IResolvable | Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf">Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Apigatewayv2RoutingRuleConditionMatchHeaders;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeaders">Apigatewayv2RoutingRuleConditionMatchHeaders</a>

---


### Apigatewayv2RoutingRuleConditionOutputReference <a name="Apigatewayv2RoutingRuleConditionOutputReference" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.Initializer"></a>

```typescript
import { apigatewayv2RoutingRule } from '@cdktn/provider-aws'

new apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.putMatchBasePaths">putMatchBasePaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.putMatchHeaders">putMatchHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.resetMatchBasePaths">resetMatchBasePaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.resetMatchHeaders">resetMatchHeaders</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMatchBasePaths` <a name="putMatchBasePaths" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.putMatchBasePaths"></a>

```typescript
public putMatchBasePaths(value: IResolvable | Apigatewayv2RoutingRuleConditionMatchBasePaths[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.putMatchBasePaths.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePaths">Apigatewayv2RoutingRuleConditionMatchBasePaths</a>[]

---

##### `putMatchHeaders` <a name="putMatchHeaders" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.putMatchHeaders"></a>

```typescript
public putMatchHeaders(value: IResolvable | Apigatewayv2RoutingRuleConditionMatchHeaders[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.putMatchHeaders.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeaders">Apigatewayv2RoutingRuleConditionMatchHeaders</a>[]

---

##### `resetMatchBasePaths` <a name="resetMatchBasePaths" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.resetMatchBasePaths"></a>

```typescript
public resetMatchBasePaths(): void
```

##### `resetMatchHeaders` <a name="resetMatchHeaders" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.resetMatchHeaders"></a>

```typescript
public resetMatchHeaders(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.property.matchBasePaths">matchBasePaths</a></code> | <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList">Apigatewayv2RoutingRuleConditionMatchBasePathsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.property.matchHeaders">matchHeaders</a></code> | <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList">Apigatewayv2RoutingRuleConditionMatchHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.property.matchBasePathsInput">matchBasePathsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePaths">Apigatewayv2RoutingRuleConditionMatchBasePaths</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.property.matchHeadersInput">matchHeadersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeaders">Apigatewayv2RoutingRuleConditionMatchHeaders</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleCondition">Apigatewayv2RoutingRuleCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `matchBasePaths`<sup>Required</sup> <a name="matchBasePaths" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.property.matchBasePaths"></a>

```typescript
public readonly matchBasePaths: Apigatewayv2RoutingRuleConditionMatchBasePathsList;
```

- *Type:* <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList">Apigatewayv2RoutingRuleConditionMatchBasePathsList</a>

---

##### `matchHeaders`<sup>Required</sup> <a name="matchHeaders" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.property.matchHeaders"></a>

```typescript
public readonly matchHeaders: Apigatewayv2RoutingRuleConditionMatchHeadersList;
```

- *Type:* <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList">Apigatewayv2RoutingRuleConditionMatchHeadersList</a>

---

##### `matchBasePathsInput`<sup>Optional</sup> <a name="matchBasePathsInput" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.property.matchBasePathsInput"></a>

```typescript
public readonly matchBasePathsInput: IResolvable | Apigatewayv2RoutingRuleConditionMatchBasePaths[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePaths">Apigatewayv2RoutingRuleConditionMatchBasePaths</a>[]

---

##### `matchHeadersInput`<sup>Optional</sup> <a name="matchHeadersInput" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.property.matchHeadersInput"></a>

```typescript
public readonly matchHeadersInput: IResolvable | Apigatewayv2RoutingRuleConditionMatchHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeaders">Apigatewayv2RoutingRuleConditionMatchHeaders</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Apigatewayv2RoutingRuleCondition;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleCondition">Apigatewayv2RoutingRuleCondition</a>

---



